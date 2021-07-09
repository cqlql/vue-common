const HtmlWebpackPlugin = require('html-webpack-plugin')
const escapeRegex = require('escape-string-regexp')
const path = require('path')
const slash = require('slash')
const sourceMapUrl = require('source-map-url')

class InlineChunkHtmlPlugin {
  getInlinedTag (publicPath, compilation, tag, regex) {
    let assetUrl

    // inline js
    if (tag.tagName === 'script') {
      const currentAssetUrl = tag.attributes.src
      if (regex.test(currentAssetUrl)) {
        tag = {
          tagName: 'script',
          closeTag: true,
          attributes: {
            type: 'text/javascript'
          }
        }
        assetUrl = currentAssetUrl
      }

    // inline css
    } else if (tag.tagName === 'link') {
      const currentAssetUrl = tag.attributes.href
      if (regex.test(currentAssetUrl)) {
        tag = {
          tagName: 'style',
          closeTag: true,
          attributes: {
            type: 'text/css'
          }
        }
        assetUrl = currentAssetUrl
      }
    }

    if (assetUrl) {
      // Strip public URL prefix from asset URL to get Webpack asset name
      const assetName = path.posix.relative(publicPath, assetUrl)
      const asset = compilation.assets[assetName]
      const updatedSource = this.resolveSourceMaps(compilation, assetName, asset, publicPath)
      tag.innerHTML = (tag.tagName === 'script') ? updatedSource.replace(/(<)(\/script>)/g, '\\x3C$2') : updatedSource
    }

    return tag
  }

  apply (compiler) {
    let publicPath = compiler.options.output.publicPath || ''
    if (publicPath && !publicPath.endsWith('/')) {
      publicPath += '/'
    }

    compiler.hooks.compilation.tap('InlineChunkHtmlPlugin', compilation => {
      const hooks = HtmlWebpackPlugin.getHooks(compilation)
      hooks.alterAssetTagGroups.tap('InlineChunkHtmlPlugin', assets => {
        const regex = assets.plugin.options.inlineSource
        const tagFunction = tag => this.getInlinedTag(publicPath, compilation, tag, regex)
        if (regex) {
          assets.headTags = assets.headTags.map(tagFunction)
          assets.bodyTags = assets.bodyTags.map(tagFunction)
        }
      })

      // Still emit the runtime chunk for users who do not use our generated
      // index.html file.
      // hooks.afterEmit.tap('InlineChunkHtmlPlugin', () => {
      //   Object.keys(compilation.assets).forEach(assetName => {
      //     if (this.tests.some(test => assetName.match(test))) {
      //       delete compilation.assets[assetName];
      //     }
      //   });
      // });
    })
  }

  resolveSourceMaps (compilation, assetName, asset, publicPath) {
    let source = asset.source()
    const out = compilation.outputOptions
    // Get asset file absolute path
    const assetPath = path.join(out.path, assetName)
    // Extract original sourcemap URL from source string
    if (typeof source !== 'string') {
      source = source.toString()
    }
    const mapUrlOriginal = sourceMapUrl.getFrom(source)
    // Return unmodified source if map is unspecified, URL-encoded, or already relative to site root
    if (!mapUrlOriginal || mapUrlOriginal.indexOf('data:') === 0 || mapUrlOriginal.indexOf('/') === 0) {
      return source
    }
    // Figure out sourcemap file path *relative to the asset file path*
    const assetDir = path.dirname(assetPath)
    const mapPath = path.join(assetDir, mapUrlOriginal)
    const mapPathRelative = path.relative(out.path, mapPath)
    // Prepend Webpack public URL path to source map relative path
    // Calling `slash` converts Windows backslashes to forward slashes
    const mapUrlCorrected = slash(path.join(publicPath, mapPathRelative))
    // Regex: exact original sourcemap URL, possibly '*/' (for CSS), then EOF, ignoring whitespace
    const regex = new RegExp(escapeRegex(mapUrlOriginal) + '(\\s*(?:\\*/)?\\s*$)')
    // Replace sourcemap URL and (if necessary) preserve closing '*/' and whitespace
    return source.replace(regex, function (match, group) {
      return mapUrlCorrected + group
    })
  };
}

module.exports = InlineChunkHtmlPlugin

import CacheAsync from '@/utils/cache/CacheAsync';
import scriptLoad from '@/utils/dom/load/script-load';
import ImageUploadAdapterPlugin from './image-upload-adapter';
import type { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';

const editorLoadCache = new CacheAsync(() =>
  // jsdelivr cdn 速度较慢
  // scriptLoad('//cdn.jsdelivr.net/npm/@ckeditor/ckeditor5-build-classic@41.1.0/build/ckeditor.js')
  // scriptLoad('//cdn.bootcdn.net/ajax/libs/ckeditor5/39.0.2/ckeditor.min.js')
  scriptLoad('/ckeditor.js'),
);

export async function editorLoadOnce(
  el: HTMLElement,
  onLoadedSuccess: (editor: ClassicEditor) => void,
) {
  await editorLoadCache.request();
  const watchdog = new CKSource.EditorWatchdog(CKSource.Editor);

  function handleSampleError(error: any) {
    const issueUrl = 'https://github.com/ckeditor/ckeditor5/issues';

    const message = [
      'Oops, something went wrong!',
      `Please, report the following error on ${issueUrl} with the build id "5l6d9jto3oc6-5p17h3cs4fnb" and the error stack trace:`,
    ].join('\n');

    console.error(message);
    console.error(error);
  }

  watchdog.setCreator((element, config) => {
    return CKSource.Editor.create(element as HTMLElement, config).then((editor) => {
      onLoadedSuccess(editor);
      return editor;
    });
  });

  watchdog.setDestructor((editor) => {
    return editor.destroy();
  });

  watchdog.on('error', handleSampleError);

  watchdog
    .create(el, {
      placeholder: '在这里输入或粘贴内容!',
      extraPlugins: [ImageUploadAdapterPlugin],
    })
    .catch(handleSampleError);
}

/**
 * 计算经纬坐标距离
 * 适用高德地图。应该也适用其他地图，待测
 * 高德地图测试：https://lbs.amap.com/demo/javascript-api/example/calcutation/calculate-distance-between-two-markers
 * @return Number 距离，单位米
*/
export default function earthDistance (lng1, lat1, lng2, lat2) {
  function rad (d) {
    return (d * Math.PI) / 180.0
  }
  const radLat1 = rad(lat1)
  const radLat2 = rad(lat2)
  const a = radLat1 - radLat2
  const b = rad(lng1) - rad(lng2)
  let s = 2 *
          Math.asin(
            Math.sqrt(
              Math.pow(Math.sin(a / 2), 2) +
              Math.cos(radLat1) *
              Math.cos(radLat2) *
              Math.pow(Math.sin(b / 2), 2)
            )
          )

  // 取WGS84标准参考椭球中的地球长半径(单位:m)
  // Gcj02标准也是以此作为值作为地球半径? https://blog.csdn.net/weixin_41804049/article/details/107537320
  s = s * 6378137

  s = Math.round(s * 10000) / 10000

  // //下面为两点间空间距离（非球面体）
  // var value= Math.pow(Math.pow(lng1-lng2,2)+Math.pow(lat1-lat2,2),1/2);

  return s
}

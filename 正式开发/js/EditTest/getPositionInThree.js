function getPosition(e) {
  const camera=$("#camera").get(0).object3D
  // console.dir(camera)
  //1.首先在鼠标经过的位置,设置一个实体
  //2.Aframe和Three.js完全兼容
  const mouseX = event.clientX; //鼠标单击坐标X
  const mouseY = event.clientY; //鼠标单击坐标Y

  // 屏幕坐标转标准设备坐标
  const x = (mouseX / window.innerWidth) * 2 - 1;
  const y = -(mouseY / window.innerHeight) * 2 + 1;
  //标准设备坐标(z=0.5这个值并没有一个具体的说法)
  const stdVector = new THREE.Vector3(x.toFixed(2), y.toFixed(2), 0);
  // const matrixWorld=camera
  const res=stdVector.unproject(camera.children[0])

  res.x=res.x.toFixed(6)
  res.y=res.y.toFixed(6)
  res.z=res.z.toFixed(6)

  console.log(res)
}
document.addEventListener("mousemove", getPosition);

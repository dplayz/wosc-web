document.addEventListener('DOMContentLoaded', function () {
    MicroModal.init();
  });
  var smpStatusCanvas;
  var blobUrl;
  const btn = document.querySelector('#captureButton');
  btn.addEventListener('click', capture)
  function capture() {
      const captureElement = document.querySelector('#smpstatus') // Select the element you want to capture. Select the <body> element to capture full page.
    
      captureElement.style.width = '710px'
      captureElement.style.height = '460px'
      captureElement.style.position = 'sticky'
      captureElement.style.top = '-500px'
      html2canvas((captureElement),{
              allowTaint: true,
              useCORS: true,
              width: 720,
              height: 460,
          })
          .then(canvas => {
              document.body.appendChild(canvas)
              captureElement.style.width = null;
              captureElement.style.height = null;
              captureElement.style.position = null;
              captureElement.style.top = null;
              return canvas

          })
          .then(canvas => {
              const image = canvas.toDataURL('image/png')
              document.querySelector('#smpstatusdlpreview').setAttribute('src', image)
              window.smpStatusCanvas = image
      window.blobUrl = blobUrl;
              canvas.remove()
          })
  }
  function smpstatsCaptureDL(){
      const a = document.createElement('a')
      a.setAttribute('download', 'smpstatus.png')
      a.setAttribute('href', smpStatusCanvas)
      a.click()
  }
  
  
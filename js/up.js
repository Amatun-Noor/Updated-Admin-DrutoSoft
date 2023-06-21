window.addEventListener('DOMContentLoaded', function () {
    const uploadInput = document.getElementById('upload');
    const previewImage = document.getElementById('preview-image');
    const changeButton = document.getElementById('change-button');
  
    uploadInput.addEventListener('change', function (e) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
          previewImage.style.backgroundImage = `url(${event.target.result})`;
        }
        reader.readAsDataURL(file);
      }
    });
  
    changeButton.addEventListener('click', function () {
      uploadInput.value = null;
      previewImage.style.backgroundImage = 'none';
    });
  });
  
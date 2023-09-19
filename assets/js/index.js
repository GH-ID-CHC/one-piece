document.addEventListener('DOMContentLoaded', function () {
    const closeButton = document.getElementById('mac-close');
    const minimizeButton = document.getElementById('mac-minimize');
    const fullscreenButton = document.getElementById('mac-fullscreen');
    const modal = new bootstrap.Modal(document.getElementById('loginModal'));

    closeButton.addEventListener('click', function () {
        modal.hide();
    });

    minimizeButton.addEventListener('click', function () {
        // Implement minimize functionality here
    });

    fullscreenButton.addEventListener('click', function () {
        // Implement fullscreen functionality here
    });
});
$('#login').click(function () {
    // 手动关闭模态框
    $('#userIcon').attr("src","assets/images/logo/logo.png")
    $("#loginModal").modal('hide')
})

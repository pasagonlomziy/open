document.addEventListener('DOMContentLoaded', () => {
    const loginPage = document.getElementById('login-page');
    const menuPage = document.getElementById('menu-page');
    const loginForm = document.getElementById('login-form');

    // 1. ตรวจสอบว่าเคยล็อคอินไว้แล้วหรือยัง (ถ้าเคย ให้ข้ามไปหน้าเมนูเลย)
    if (sessionStorage.getItem('isLoggedIn') === 'true') {
        if (loginPage) loginPage.classList.add('hidden');
        if (menuPage) {
            menuPage.classList.remove('hidden');
            menuPage.classList.add('flex');
        }
    }

    // 2. จัดการเมื่อกดปุ่มล็อคอิน
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const btn = this.querySelector('button');
            btn.innerHTML = "กำลังเข้าสู่ระบบ...";
            btn.disabled = true;

            // เมื่อพร้อมต่อ Google Sheet สามารถใส่ Fetch API ตรงนี้ได้

            // บันทึกสถานะลงในเบราว์เซอร์ว่า "ล็อคอินแล้ว"
            sessionStorage.setItem('isLoggedIn', 'true');

            // ซ่อนหน้าล็อคอิน แสดงหน้าเมนู
            setTimeout(() => {
                loginPage.classList.add('hidden');
                menuPage.classList.remove('hidden');
                menuPage.classList.add('flex');
            }, 500);
        });
    }
});
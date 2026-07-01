// เพิ่ม JavaScript สำหรับการโต้ตอบกับผู้ใช้ (Optional)
document.addEventListener('DOMContentLoaded', function () {
    console.log('Portfolio ของ LILLY พร้อมแล้ว!');
});
<script>
    // ดึงกล่องย่อยทั้งหมดที่มีคลาส .sub-box
    const subBoxes = document.querySelectorAll('.sub-box');

    subBoxes.forEach(box => {
        box.addEventListener('click', () => {
            // ลบคลาสเก่าออกก่อน (เผื่อกรณีกดซ้ำเร็วมากๆ)
            box.classList.remove('bounce-active');
            
            // ใช้ void เพื่อรีเซ็ตแอนิเมชันของเบราว์เซอร์ให้เริ่มนับหนึ่งใหม่ทันที
            void box.offsetWidth; 
            
            // ใส่คลาสแอนิเมชันเด้งดึ๋งเข้า突
            box.classList.add('bounce-active');
        });

        // เมื่อแอนิเมชันเล่นจบ ให้เอาคลาสออก เพื่อเตรียมพร้อมสำหรับการคลิกครั้งต่อไป
        box.addEventListener('animationend', () => {
            box.classList.remove('bounce-active');
        });
    });
</script>

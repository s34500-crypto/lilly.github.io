// เพิ่ม JavaScript สำหรับการโต้ตอบกับผู้ใช้ (Optional)
document.addEventListener('DOMContentLoaded', function () {
    console.log('Portfolio ของ LILLY พร้อมแล้ว!');
});
<script>
    // ใช้ฟังก์ชันนี้เพื่อผูกเหตุการณ์คลิกให้กับทุกกล่องที่มีอยู่ และกล่องที่อาจจะเพิ่มเข้ามาใหม่
    function setupBounceEffect() {
        // ดึงกล่องย่อยทั้งหมดในหน้าเว็บ ณ ปัจจุบัน
        const subBoxes = document.querySelectorAll('.sub-box');

        subBoxes.forEach(box => {
            // เคลียร์ Event Listener เก่าออกก่อนเพื่อไม่ให้เกิดการซ้อนทับกัน
            box.removeEventListener('click', handleBoxClick);
            box.addEventListener('click', handleBoxClick);

            box.removeEventListener('animationend', handleAnimationEnd);
            box.addEventListener('animationend', handleAnimationEnd);
        });
    }

    // ฟังก์ชันจัดการตอนคลิก: สั่งให้เด้งรัวๆ ไม่ค้าง
    function handleBoxClick(event) {
        const box = event.currentTarget;
        
        // ลบคลาสแอนิเมชันออกก่อนทันที
        box.classList.remove('bounce-active');
        
        // บังคับให้เบราว์เซอร์ล้างสถานะแอนิเมชันเดิม (Reflow) เพื่อให้ยอมรันแอนิเมชันใหม่
        void box.offsetWidth; 
        
        // ใส่คลาสแอนิเมชันกลับเข้าไปเพื่อเริ่มเด้งใหม่
        box.classList.add('bounce-active');
    }

    // ฟังก์ชันจัดการตอนแอนิเมชันเล่นจบ
    function handleAnimationEnd(event) {
        event.currentTarget.classList.remove('bounce-active');
    }

    // สั่งให้ระบบเริ่มทำงานทันทีเมื่อโหลดหน้าเว็บ
    document.addEventListener('DOMContentLoaded', setupBounceEffect);
    // รันอีกครั้งเพื่อความชัวร์หากมีการเปลี่ยนแปลงโครงสร้างหน้าเว็บ
    setupBounceEffect();
</script>
<script>
    // ดึงกล่องย่อยทั้งหมดที่อยู่ใน .project-list
    const projectBoxes = document.querySelectorAll('.project-list .sub-box');

    projectBoxes.forEach(box => {
        box.addEventListener('click', () => {
            // 1. ลบคลาสเก่าออกก่อนเพื่อรีเซ็ตสถานะ
            box.classList.remove('bounce-active');
            
            // 2. ใช้เทคนิค void บังคับให้เบราว์เซอร์เคลียร์แคชแอนิเมชันเก่าทันที (Reflow)
            void box.offsetWidth; 
            
            // 3. ใส่คลาสแอนิเมชันกลับเข้าไปใหม่ ทำให้เด้งรัวๆ ได้ไม่ค้าง
            box.classList.add('bounce-active');
        });

        // เมื่อแอนิเมชันเด้งจบในแต่ละรอบ ให้ลบคลาสออกเพื่อเตรียมพร้อมสำหรับการคลิกครั้งต่อไป
        box.addEventListener('animationend', () => {
            box.classList.remove('bounce-active');
        });
    });
</script>


// JavaScript สำหรับควบคุมเอฟเฟกต์การโต้ตอบ (ย้ายออกจาก index.html)
function createEmbers() {
    const container = document.getElementById('ember-container');
    if (!container) return;
    container.innerHTML = ''; // เคลียร์ของเก่าก่อน
    const emberCount = 30;
    for (let i = 0; i < emberCount; i++) {
        const ember = document.createElement('div');
        const size = Math.random() * 3 + 1;
        const leftPos = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 4 + 3;
        ember.style.position = 'absolute';
        ember.style.bottom = '0px';
        ember.style.left = `${leftPos}%`;
        ember.style.width = `${size}px`;
        ember.style.height = `${size}px`;
        ember.style.backgroundColor = '#f97316';
        ember.style.borderRadius = '50%';
        ember.style.opacity = Math.random() * 0.8 + 0.2;
        ember.style.filter = 'blur(0.5px) drop-shadow(0 0 4px #ef4444)';
        ember.style.animation = `upwardEmber ${duration}s linear infinite`;
        ember.style.animationDelay = `${delay}s`;
        container.appendChild(ember);
    }
}

// เพิ่มสไตล์แอนิเมชันสำหรับละอองไฟแบบ Dynamic
(function addEmberKeyframes(){
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
        @keyframes upwardEmber {
            0% { transform: translateY(0) translateX(0); opacity: 0.8; }
            50% { transform: translateY(-100px) translateX(15px); }
            100% { transform: translateY(-250px) translateX(-10px); opacity: 0; }
        }
    `;
    document.head.appendChild(styleSheet);
})();

function changeIntensity(level) {
    const statusEl = document.getElementById('system-status');
    const spireBeam = document.getElementById('spire-beam');
    const lavaRiver = document.querySelector('.lava-river');
    const buttons = ['calm', 'active', 'overdrive'];
    buttons.forEach(btn => {
        const btnEl = document.getElementById(`btn-${btn}`);
        if (!btnEl) return;
        if (btn === level) {
            btnEl.className = "px-3 py-1 text-xs rounded bg-red-900/50 text-red-200 border border-red-500/50 transition";
        } else {
            btnEl.className = "px-3 py-1 text-xs rounded bg-neutral-800 hover:bg-neutral-700 transition border border-neutral-700 text-neutral-300";
        }
    });

    if (!statusEl || !spireBeam || !lavaRiver) return;

    if (level === 'calm') {
        statusEl.textContent = "● พลังงานคงที่: ไฟกรุ่นพร้อมใช้";
        statusEl.className = "text-[10px] font-mono text-green-400 mt-1";
        spireBeam.style.height = "10px";
        spireBeam.style.filter = "blur(1px)";
        lavaRiver.style.animationDuration = "25s";
    } else if (level === 'active') {
        statusEl.textContent = "● ระบบป้อนไฟปกติ: ตื่นตัวพร้อมสร้างสรรค์";
        statusEl.className = "text-[10px] font-mono text-orange-400 mt-1";
        spireBeam.style.height = "80px";
        spireBeam.style.filter = "blur(1px) drop-shadow(0 0 5px #f43f5e)";
        lavaRiver.style.animationDuration = "12s";
    } else if (level === 'overdrive') {
        statusEl.textContent = "▲ คำเตือน: พลังงานเกลือกกลั้ว ปะทุขั้นสูงสุด!";
        statusEl.className = "text-[10px] font-mono text-red-400 mt-1 animate-pulse";
        spireBeam.style.height = "180px";
        spireBeam.style.filter = "blur(1px) drop-shadow(0 0 15px #facc15)";
        lavaRiver.style.animationDuration = "5s";
    }
}

window.addEventListener('load', function(){
    createEmbers();
});

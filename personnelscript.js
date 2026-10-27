// ข้อมูลรายละเอียดของอาจารย์แต่ละท่าน
const personnelData = {
  1: {
    name: "ผศ.ดร. สมเกียรติ",
    role: "ประธานสาขา",
    image: "photoarjan/1.jpg",
    detail: `
            <div class="space-y-2 text-left">
                <p><strong>วุฒิการศึกษา:</strong> วศ.ด. (วิศวกรรมคอมพิวเตอร์)</p>
                <p><strong>ห้องทำงาน:</strong> อาคารวิศวกรรมศาสตร์ ห้อง CPE-401</p>
                <p><strong>อีเมล:</strong> somkiat@cpe.ac.th</p>
                <p><strong>ความเชี่ยวชาญ:</strong></p>
                <ul class="list-disc list-inside pl-2 text-xs text-slate-600 space-y-1">
                    <li>ระบบฝังตัว (Embedded Systems)</li>
                    <li>สถาปัตยกรรมคอมพิวเตอร์ (Computer Architecture)</li>
                    <li>การบริหารจัดการโครงการซอฟต์แวร์</li>
                </ul>
            </div>
        `,
  },
  2: {
    name: "รศ.ดร. วิทยา",
    role: "ประธานหลักสูตร",
    image: "photoarjan/2.jpg",
    detail: `
            <div class="space-y-2 text-left">
                <p><strong>วุฒิการศึกษา:</strong> Ph.D. in Computer Science</p>
                <p><strong>ห้องทำงาน:</strong> อาคารวิศวกรรมศาสตร์ ห้อง CPE-402</p>
                <p><strong>อีเมล:</strong> wittaya@cpe.ac.th</p>
                <p><strong>ความเชี่ยวชาญ:</strong></p>
                <ul class="list-disc list-inside pl-2 text-xs text-slate-600 space-y-1">
                    <li>ปัญญาประดิษฐ์ (Artificial Intelligence)</li>
                    <li>การเรียนรู้ของเครื่อง (Machine Learning & Deep Learning)</li>
                    <li>วิทยาการข้อมูล (Data Science)</li>
                </ul>
            </div>
        `,
  },
  3: {
    name: "อ. นวัตกรรม",
    role: "อาจารย์กิจกรรม",
    image: "photoarjan/3.jpg",
    detail: `
            <div class="space-y-2 text-left">
                <p><strong>วุฒิการศึกษา:</strong> วศ.ม. (วิศวกรรมคอมพิวเตอร์)</p>
                <p><strong>ห้องทำงาน:</strong> อาคารวิศวกรรมศาสตร์ ห้อง CPE-403</p>
                <p><strong>อีเมล:</strong> nawattakam@cpe.ac.th</p>
                <p><strong>ความเชี่ยวชาญ:</strong></p>
                <ul class="list-disc list-inside pl-2 text-xs text-slate-600 space-y-1">
                    <li>อินเทอร์เน็ตของสรรพสิ่ง (Internet of Things - IoT)</li>
                    <li>ระบบสมาร์ทฟาร์มและสมาร์ทซิตี้</li>
                    <li>การจัดกิจกรรมพัฒนานักศึกษาและนวัตกรรม</li>
                </ul>
            </div>
        `,
  },
  4: {
    name: "อ. ความปลอดภัย",
    role: "อาจารย์ประจำสาขา",
    image: "photoarjan/4.jpg",
    detail: `
            <div class="space-y-2 text-left">
                <p><strong>ความเชี่ยวชาญหลัก:</strong> Cybersecurity & Network Security</p>
                <p><strong>วิชาที่สอน:</strong> Ethical Hacking, Cryptography, System Security</p>
                <p><strong>อีเมล:</strong> security@cpe.ac.th</p>
            </div>
        `,
  },
  5: {
    name: "ดร. ซอฟต์แวร์",
    role: "อาจารย์ประจำสาขา",
    image: "photoarjan/5.jpg",
    detail: `
            <div class="space-y-2 text-left">
                <p><strong>ความเชี่ยวชาญหลัก:</strong> Software Architecture & Cloud Computing</p>
                <p><strong>วิชาที่สอน:</strong> Software Engineering, Full-Stack Web Development</p>
                <p><strong>อีเมล:</strong> software@cpe.ac.th</p>
            </div>
        `,
  },
  6: {
    name: "ผศ.ดร. กฤษฎา",
    role: "อาจารย์ประจำสาขา",
    image: "photoarjan/6.jpg",
    detail: `
            <div class="space-y-2 text-left">
                <p><strong>ความเชี่ยวชาญหลัก:</strong> Cloud Architecture & DevOps</p>
                <p><strong>วิชาที่สอน:</strong> Distributed Systems, Containerization (Docker/K8s)</p>
                <p><strong>อีเมล:</strong> kritsada@cpe.ac.th</p>
            </div>
        `,
  },
  7: {
    name: "ดร. ชาญชัย",
    role: "อาจารย์ประจำสาขา",
    image: "photoarjan/7.jpg",
    detail: `
            <div class="space-y-2 text-left">
                <p><strong>ความเชี่ยวชาญหลัก:</strong> Database Systems & Big Data</p>
                <p><strong>วิชาที่สอน:</strong> Database Management, Data Engineering</p>
                <p><strong>อีเมล:</strong> chanchai@cpe.ac.th</p>
            </div>
        `,
  },
  8: {
    name: "อ. ณัฐพงศ์",
    role: "อาจารย์ประจำสาขา",
    image: "photoarjan/8.jpg",
    detail: `
            <div class="space-y-2 text-left">
                <p><strong>ความเชี่ยวชาญหลัก:</strong> Computer Networks & Infrastructure</p>
                <p><strong>วิชาที่สอน:</strong> Computer Networks, Routing & Switching</p>
                <p><strong>อีเมล:</strong> nuttapong@cpe.ac.th</p>
            </div>
        `,
  },
  9: {
    name: "รศ.ดร. ธนกฤต",
    role: "อาจารย์ประจำสาขา",
    image: "photoarjan/9.jpg",
    detail: `
            <div class="space-y-2 text-left">
                <p><strong>ความเชี่ยวชาญหลัก:</strong> Robotics & Automation Systems</p>
                <p><strong>วิชาที่สอน:</strong> Control Systems, Industrial Robotics, ROS</p>
                <p><strong>อีเมล:</strong> tanakrit@cpe.ac.th</p>
            </div>
        `,
  },
  10: {
    name: "ดร. ปรียา",
    role: "อาจารย์ประจำสาขา",
    image: "photoarjan/10.jpg",
    detail: `
            <div class="space-y-2 text-left">
                <p><strong>ความเชี่ยวชาญหลัก:</strong> Computer Vision & Image Processing</p>
                <p><strong>วิชาที่สอน:</strong> Pattern Recognition, Medical Image Analysis</p>
                <p><strong>อีเมล:</strong> preeya@cpe.ac.th</p>
            </div>
        `,
  },
  11: {
    name: "อ. ภานุพงศ์",
    role: "อาจารย์ประจำสาขา",
    image: "photoarjan/11.jpg",
    detail: `
            <div class="space-y-2 text-left">
                <p><strong>ความเชี่ยวชาญหลัก:</strong> Game Development & AR/VR</p>
                <p><strong>วิชาที่สอน:</strong> 3D Graphics, Game Engine Programming</p>
                <p><strong>อีเมล:</strong> panupong@cpe.ac.th</p>
            </div>
        `,
  },
  12: {
    name: "ผศ. มนีรัตน์",
    role: "อาจารย์ประจำสาขา",
    image: "photoarjan/12.jpg",
    detail: `
            <div class="space-y-2 text-left">
                <p><strong>ความเชี่ยวชาญหลัก:</strong> UI/UX Design & HCI</p>
                <p><strong>วิชาที่สอน:</strong> User Experience Design, Frontend Interface</p>
                <p><strong>อีเมล:</strong> maneerat@cpe.ac.th</p>
            </div>
        `,
  },
  13: {
    name: "ดร. ยุทธนา",
    role: "อาจารย์ประจำสาขา",
    image: "photoarjan/13.jpg",
    detail: `
            <div class="space-y-2 text-left">
                <p><strong>ความเชี่ยวชาญหลัก:</strong> Blockchain & Web3 Technology</p>
                <p><strong>วิชาที่สอน:</strong> Smart Contract Programming, FinTech</p>
                <p><strong>อีเมล:</strong> yutthana@cpe.ac.th</p>
            </div>
        `,
  },
  14: {
    name: "อ. รินรดา",
    role: "อาจารย์ประจำสาขา",
    image: "photoarjan/14.jpg",
    detail: `
            <div class="space-y-2 text-left">
                <p><strong>ความเชี่ยวชาญหลัก:</strong> Mobile Application Development</p>
                <p><strong>วิชาที่สอน:</strong> Cross-Platform App Dev (Flutter/React Native)</p>
                <p><strong>อีเมล:</strong> rinrada@cpe.ac.th</p>
            </div>
        `,
  },
  15: {
    name: "ผศ.ดร. ศุภชัย",
    role: "อาจารย์ประจำสาขา",
    image: "photoarjan/15.jpg",
    detail: `
            <div class="space-y-2 text-left">
                <p><strong>ความเชี่ยวชาญหลัก:</strong> Algorithms & Discrete Mathematics</p>
                <p><strong>วิชาที่สอน:</strong> Data Structures, Competitive Programming</p>
                <p><strong>อีเมล:</strong> supachai@cpe.ac.th</p>
            </div>
        `,
  },
  16: {
    name: "อ. อภิสิทธิ์",
    role: "อาจารย์ประจำสาขา",
    image: "photoarjan/16.jpg",
    detail: `
            <div class="space-y-2 text-left">
                <p><strong>ความเชี่ยวชาญหลัก:</strong> Digital Signal Processing & Audio</p>
                <p><strong>วิชาที่สอน:</strong> Signal Processing, Speech Recognition</p>
                <p><strong>อีเมล:</strong> apisit@cpe.ac.th</p>
            </div>
        `,
  },
  17: {
    name: "ดร. อัญชลี",
    role: "อาจารย์ประจำสาขา",
    image: "photoarjan/17.jpg",
    detail: `
            <div class="space-y-2 text-left">
                <p><strong>ความเชี่ยวชาญหลัก:</strong> Quantum Computing & High Performance</p>
                <p><strong>วิชาที่สอน:</strong> Quantum Algorithms, Parallel Computing</p>
                <p><strong>อีเมล:</strong> anchalee@cpe.ac.th</p>
            </div>
        `,
  },
};

// ฟังก์ชั่นแสดงรายละเอียดอาจารย์เมื่อคลิก
function showPerson(id) {
  const data = personnelData[id];
  if (!data) return;

  // อัปเดตข้อมูลใน Modal
  document.getElementById("modal-name").innerHTML = data.name;
  document.getElementById("modal-role").innerHTML = data.role;
  document.getElementById("modal-detail").innerHTML = data.detail;

  // อัปเดตรูปภาพ
  const modalImg = document.getElementById("modal-img");
  modalImg.src = data.image;
  modalImg.alt = data.name;

  // ถ้ารูปโหลดไม่ได้ ให้แสดง รูปอวตารตัวอักษรแทน
  modalImg.onerror = function () {
    this.onerror = null;
    const cleanName = data.name.replace(/(ผศ\.|รศ\.|ดร\.|อ\.)/g, "").trim();
    this.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(cleanName)}&background=f97316&color=fff&bold=true`;
  };

  // แสดง Modal
  const modal = document.getElementById("person-modal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

// ฟังก์ชั่นปิด Modal
function closePerson() {
  const modal = document.getElementById("person-modal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

// ปิด Modal เมื่อคลิกพื้นที่ว่างข้างนอก
window.addEventListener("click", function (e) {
  const modal = document.getElementById("person-modal");
  if (e.target === modal) {
    closePerson();
  }
});

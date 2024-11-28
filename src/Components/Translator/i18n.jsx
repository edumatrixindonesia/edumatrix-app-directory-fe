import i18n from "i18next";
import { useEffect } from "react";
import { initReactI18next } from "react-i18next";
// const [faqData, setFaqData] = useState([]);

// useEffect(() => {
//   const fetchFaq = () => {
//     fetch("https://api.edulink-indonesia.com/faqigcse")
//       .then((res) => res.json())
//       .then((data) => {
//         setFaqData(data);
//         data;
//       });
//   };
//   fetchFaq();
// }, []);

const resources = {
  en: {
    translation: {
      label: {},
      error: {},
      message: {},
      text: {
        titleProgram: "INTERNATIONAL PROGRAMS WE OFFER",
        whatIgcse: "What is IGCSE?",
        deskWhatIgcse:
          "It uses the Cambridge Curriculum, which features more challenging questions.",

        whatAlevel: "What is A Level?",
        deskAlevel:
          "A Level is a subject-based qualification used for university admissions, higher education, training, and employment.",

        whatIB: "What is International Baccalaureate (IB)?",
        deksIB:
          "The International Baccalaureate (IB) is a global educational program for students aged 16-19 that emphasizes a broad, holistic approach to learning. It is designed to develop inquiring, knowledgeable, and caring young people who are motivated to succeed and make a difference.",
        ctaUmum: "https://api.whatsapp.com/send?phone=6285712217876&text=Hello%20Miss%20Sari%20https://app.edumatrix-indonesia.com,%20I%20would%20like%20to%20ask%20about%20the%20IGCSE,%20O%20Level,%20A%20Level%20&%20IB%20Tutor%20program%20at%20Edumatrix.%20%20What%20are%20the%20course%20types%20and%20session%20package%20options?"
        },
      whatDoesIGCSE: {
        title: "What does the IB program include?",
        subTitle_1: "Six Subject Groups",
        subTitle_2: "Theory of Knowledge (TOK)",
        subTitle_3: "Extended Essay (EE)",
        subTitle_4: "Creativity, Activity, Service (CAS)",
        desk_1: "Students choose one subject from each group, including languages, social studies, experimental sciences, mathematics, and the arts.",
        desk_2: "A course that explores the nature of knowledge and how we know what we claim to know.",
        desk_3: "A 4,000-word independent research paper on a topic of the student's choice.",
        desk_4: "A component that encourages students to engage in artistic, athletic, and community service activities."
      },
      paketIGCSEPriority: {
        title: "IGCSE STUDY PLAN",
        point_1: "Flexible schedule",
        point_2: "120 minutes lesson",
        point_3: "Includes e-books with materials, questions, and explanations",
        point_4: "Access to practice question drills",
        point_5: "Monthly progress report",
        point_6: "Free registration fee",
        point_7: "Free assessment (Pre-Test and Post-Test)",
        point_8: "Free academic consultation",
        point_9: "Language of instruction available In Indonesia, English, Bilingual (English-Indonesian)",
        point_10: "Session recording",
        button: "SELECT PACKAGE",
        cta: "https://api.whatsapp.com/send?phone=6285712217876&text=Hello%20Miss%20Sari%20https://app.edumatrix-indonesia.com,%20I%20want%20to%20register%20for%20the%20Priority%20Package%20International%20Curriculum%20tutoring."
      },
      paketIGCSEDeluxe: {
        title: "IGCSE STUDY PLAN",
        point_1: "Flexible schedule",
        point_2: "90 minutes lesson",
        point_3: "Includes e-books with materials, questions, and explanations",
        point_4: "Access to practice question drills",
        point_5: "Monthly progress report",
        point_6: "Free registration fee",
        point_7: "Free assessment (Pre-Test and Post-Test)",
        point_8: "Free academic consultation",
        point_9: "Language of instruction available In Indonesia, English, Bilingual (English-Indonesian)",
        point_10: "Session recording",
        button: "SELECT PACKAGE",
        cta: "https://api.whatsapp.com/send?phone=6285712217876&text=Hello%20Miss%20Sari%20https://app.edumatrix-indonesia.com,%20I%20want%20to%20register%20for%20the%20Deluxe%20Package%20International%20Curriculum%20tutoring."
      },
      materiIgcse: {
        title: "IGCSE, O LEVEL, A LEVEL & IB STUDY PLAN",
        pointMapel_1: "Mathematics",
        pointMapel_2: "Accounting",
        pointMapel_3: "Additional Accounting",
        pointMapel_4: "Economics",
        pointMapel_5: "Physics",
        pointMapel_6: "Business Studies",
        pointMapel_7: "Chemistry",
        pointMapel_8: "English",
        pointMapel_9: "Biology",
        pointMapel_10: "Chinese",
        pointMapel_11: "Combined Science",
      },
      galleryKegiatan: {
        title: "LEARNING ACTIVITY"
      },
      keunggulan: {
        title: "ADVANTAGES"
      },
      mengapaMemilihKami: {
        title: "Why Choose Us?",
        subTitle_1: "Young and Experienced Teachers",
        subTitle_2: "Range of Materials & Practice",
        subTitle_3: "Personalized Learning",
        subTitle_4: "High Success Rate",
        desk_1: "Despite their young age, our Master Teachers have extensive teaching experience. Their closer age to students helps build a more relatable and approachable learning environment.",
        desk_2: "We offer up-to-date materials and practice resources, so you`ll always have access to the latest content.",
        desk_3: "Our lessons are tailored to each student's needs with one-on-one sessions, free consultations, and assessments.",
        desk_4: "Our dedicated Master Teachers aim for a 90% success rate, helping students achieve their goals and gain entry into their desired schools.",
      },
      benefitIgcse : {
        title: "Benefits of Choosing Us :",
        subTitle_1: "Private Learning System",
        subTitle_2: "Monthly Progress Reports",
        subTitle_3: "E-Book Exercises & Answers Key",
        subTitle_4: "Free Registration",
        subTitle_5: "Personal Consultation",
        desk_1: "One student on One Master Teacher for a personalized learning experience.",
        desk_2: "Our Master Teachers assess student strengths and weaknesses and provide a summary each month.",
        desk_3: "Access a variety of exercises and answers anytime, anywhere.",
        desk_4: "No registration fee is required.",
        desk_5: "Unsure about which course or programme to choose? We offer free consultations to help guide you.",
      },
      onlyAtEDM: {
        title: "Only at Edumatrix",
        subTitle_1: "You can Learn directly with expert tutors.",
        subTitle_2: "Flexible learning: choose when and where you study.",
        subTitle_3: "Students across Indonesia.",
        subTitle_4: "Accurate and high-quality teaching materials.",
        subTitle_5: "We provide precise and top-quality resources, assessments, and practice questions.",
      },
      liputan: {
        title: "HAS BEEN COVERED BY :"
      },
      faq: {
        title: "FREQUENTLY ASKED QUESTIONS",
      },
      asalSekolahIgcse: {
        title: "STUDENT'S SCHOOL OF ORIGIN"
      },

      // HALAMAN KOTA IGCSE
      halamanKota: {
        title: "Place IGCSE, O Level, A Level & IB Tutor in",
        desk_1: "Edumatrix Indonesia offers one-on-one tutoring IGCSE, O Level, A Level & IB in",
        desk_2: "to provide the best learning experience for students",
        desk_3: "Get Private Tutoring services anytime and anywhere with more than 5,000 Edumatrix Master Teachers who are ready to provide the best service."
      },


      // TOEFL
      program: {
        title: "OUR PROGRAMS TOEFL-TOEIC-IELTS",
        ctaUmumToefl: "https://api.whatsapp.com/send?phone=6285712217876&text=Hello%20Miss%20Sari%20https://app.edumatrix-indonesia.com,%20I%20would%20like%20to%20ask%20about%20the%20TOEFL,%20TOEIC%20IELTS,%20English%20Conversation%20program%20at%20Edumatrix.%20What%20are%20the%20course%20types%20and%20session%20package%20options?"
      },
      penjelasanToefl: {
        title_1: "TOEFL Preparation",
        title_2: "TOEIC Preparation",
        title_3: "IELTS Preparation",
        title_4: "English Conversation",
        desk_1: "Master the skills needed for the TOEFL test with our comprehensive course. Focus on reading, writing, listening, and speaking sections to improve your score and meet your university or immigration requirements.",
        desk_2: "Enhance your business English skills with our TOEIC preparation program. Perfect for career advancement, this course covers listening and reading comprehension in a professional context.",
        desk_3: "Achieve a high score on the IELTS exam with targeted practice and expert guidance. Our program addresses all four components of the test - listening, reading, writing, and speaking.",
        desk_4: "Develop your speaking skills and gain confidence with our English Conversation program. Practice real-life scenarios and enhance your ability to communicate effectively.",
      },
      paketToeflPriority: {
        title: "TOEFL - TOEIC - IELTS STUDY PACKAGE",
        point_1: "Flexible schedule",
        point_2: "120 minutes lessons",
        point_3: "10x learning sessions (Listening, Structure & Written Expression, Reading)",
        point_4: "Includes e-books with materials, questions, and explanations",
        point_5: "Access to practice question drills",
        point_6: "Monthly progress report",
        point_7: "Free registration fee",
        point_8: "TOEFL Score Prediction",
        point_9: "IELTS Mock Up Test",
        point_10: "Free academic consultation",
        point_11: "Session recording",
        button: "SELECT PACKAGE",
        cta: "https://api.whatsapp.com/send?phone=6285712217876&text=Halo%20Miss%20Sari%20https://app.edumatrix-indonesia.com,%20I%20would%20like%20to%20register%20for%20the%20Priority%20Package%20TOEFL%20exam."
      },
      paketToeflDeluxe: {
        title: "TOEFL - TOEIC - IELTS STUDY PACKAGE",
        point_1: "Flexible schedule",
        point_2: "90 minutes lessons",
        point_3: "10x learning sessions (Listening, Structure & Written Expression, Reading)",
        point_4: "Includes e-books with materials, questions, and explanations",
        point_5: "Access to practice question drills",
        point_6: "Monthly progress report",
        point_7: "Free registration fee",
        point_8: "TOEFL Score Prediction",
        point_9: "IELTS Mock Up Test",
        point_10: "Free academic consultation",
        point_11: "Session recording",
        button: "SELECT PACKAGE",
        cta: "https://api.whatsapp.com/send?phone=6285712217876&text=Halo%20Miss%20Sari%20https://app.edumatrix-indonesia.com,%20I%20would%20like%20to%20register%20for%20the%20Deluxe%20Package%20TOEFL%20exam."
      },
      kegiatanBelajar: {
        title: "LEARNING ACTIVITIES"
      },
      sistemBelajar: {
        title: "EDUMATRIX LEARNING SYSTEM",
        desk_1: "Learn through Zoom meetings, making it easy for students to record study sessions.",
        desk_2: "Tutors come to the student's home/ Study comfortably in the Office Edumatrix.",
        link: "Read more",
        ctaOn: "https://api.whatsapp.com/send?phone=6285712217876&text=Halo%20Miss%20Sari%20https://app.edumatrix-indonesia.com,%20I%20want%20to%20register%20for%20TOEFL,%20TOEIC,%20&%20IELTS%20Online%20tutoring%20center.",
        ctaOff: "https://api.whatsapp.com/send?phone=6285712217876&text=Halo%20Miss%20Sari%20https://app.edumatrix-indonesia.com,%20I%20want%20to%20register%20for%20TOEFL,%20TOEIC,%20&%20IELTS%20Offline%20tutoring%20center."
      },
      testimoni: {
        title: "STUDENT TESTIMONIALS"
      },
      
      // HALAMAN KOTA TOEFL
      halamanKotaToefl: {
        title: "TOEFL, TOEIC, IELTS, and English Conversation Lessons in",
        desk_1: "Private tutoring in",
        desk_2: "for TOEFL, TOEIC, IELTS and English Conversation",
        desk_3: "Get Private Tutoring services anytime and anywhere with more than 5,000 Edumatrix Master Teachers who are ready to give the the best service."
      },
      content: {},
    },
  },

  bn: {
    translation: {
      label: {},
      error: {},
      message: {},
      text: {
        titleProgram: "PROGRAM YANG KAMI TAWARKAN",
        whatIgcse: "Apa itu IGCSE?",
        deskWhatIgcse:
          "Ujian ini menggunakan Kurikulum Cambridge, yang menampilkan pertanyaan-pertanyaan yang lebih menantang.",

        whatAlevel: "Apa itu A Level?",
        deskAlevel:
          "A Level adalah kualifikasi berbasis mata pelajaran yang digunakan untuk universitas, pendidikan tinggi, pelatihan, dan pekerjaan.",

        whatIB: "Apa yang dimaksud dengan International Baccalaureate (IB)?",
        deksIB:
          "International Baccalaureate (IB) adalah program pendidikan global untuk siswa berusia 16-19 tahun yang menekankan pendekatan pembelajaran yang luas dan menyeluruh. Program ini dirancang untuk mengembangkan generasi muda yang selalu ingin tahu, berpengetahuan luas, dan peduli, serta termotivasi untuk sukses dan membuat perbedaan.",
        ctaUmum: "https://api.whatsapp.com/send?phone=6285712217876&text=Halo%20Kak%20Sari%20https://app.edumatrix-indonesia.com,%20saya%20ingin%20bertanya%20mengenai%20program%20IGCSE,%20O%20Level,%20A%20Level%20&%20IB%20Tutor%20di%20Edumatrix.%20Apa%20saja%20jenis%20kursus%20dan%20pilihan%20paket%20sesinya?"
        },
      whatDoesIGCSE: {
        title: "Apa saja yang termasuk dalam program IB?",
        subTitle_1: "Enam Kelompok Mata Pelajaran",
        subTitle_2: "Teori Pengetahuan (TOK)",
        subTitle_3: "Esai yang Diperpanjang (EE)",
        subTitle_4: "Kreativitas, Aktivitas, Layanan (CAS)",
        desk_1: "Siswa memilih satu mata pelajaran dari setiap kelompok, termasuk bahasa, ilmu sosial, ilmu eksperimental, matematika, dan seni.",
        desk_2: "Mata kuliah yang mengeksplorasi sifat dasar pengetahuan dan bagaimana kita mengetahui apa yang kita klaim kita ketahui.",
        desk_3: "Makalah penelitian independen sepanjang 4.000 kata tentang topik pilihan siswa.",
        desk_4: "Komponen yang mendorong siswa untuk terlibat dalam kegiatan artistik, atletik, dan pengabdian masyarakat."
      },
      paketIGCSEPriority: {
        title: "PAKET BELAJAR IGCSE",
        point_1: "Jadwal fleksibel",
        point_2: "pelajaran 120 menit",
        point_3: "Termasuk e-book berisi materi, soal, dan penjelasan",
        point_4: "Akses latihan soal",
        point_5: "Laporan kemajuan bulanan",
        point_6: "Gratis biaya pendaftaran",
        point_7: "Penilaian gratis (Pra-Tes dan Pasca-Tes)",
        point_8: "Konsultasi akademik gratis",
        point_9: "Bahasa pengantar tersedia di Indonesia, Inggris, Bilingual (Inggris-Indonesia)",
        point_10: "Rekaman sesi",
        button: "PILIH PAKET",
        cta: "https://api.whatsapp.com/send?phone=6285712217876&text=Halo%20Kak%20Sari%20https://app.edumatrix-indonesia.com,%20saya%20ingin%20mendaftar%20untuk%20bimbingan%20belajar%20Kurikulum%20Internasional%20Paket%20Priority.",
      },
      paketIGCSEDeluxe: {
        title: "PAKET BELAJAR IGCSE",
        point_1: "Jadwal fleksibel",
        point_2: "pelajaran 90 menit",
        point_3: "Termasuk e-book berisi materi, soal, dan penjelasan",
        point_4: "Akses latihan soal",
        point_5: "Laporan kemajuan bulanan",
        point_6: "Gratis biaya pendaftaran",
        point_7: "Penilaian gratis (Pra-Tes dan Pasca-Tes)",
        point_8: "Konsultasi akademik gratis",
        point_9: "Bahasa pengantar tersedia di Indonesia, Inggris, Bilingual (Inggris-Indonesia)",
        point_10: "Rekaman sesi",
        button: "PILIH PAKET",
        cta: "https://api.whatsapp.com/send?phone=6285712217876&text=Halo%20Kak%20Sari%20https://app.edumatrix-indonesia.com,%20saya%20ingin%20mendaftar%20untuk%20bimbingan%20belajar%20Kurikulum%20Internasional%20Paket%20Deluxe."
      },
      materiIgcse: {
        title: "IGCSE, O LEVEL, A LEVEL & RENCANA STUDI IB",
        pointMapel_1: "Matematika",
        pointMapel_2: "Akuntansi",
        pointMapel_3: "Akuntansi Tambahan",
        pointMapel_4: "Ekonomi",
        pointMapel_5: "Fisika",
        pointMapel_6: "Studi Bisnis",
        pointMapel_7: "Kimia",
        pointMapel_8: "Bahasa Inggris",
        pointMapel_9: "Biologi",
        pointMapel_10: "Cina",
        pointMapel_11: "Ilmu Gabungan",
      },
      galleryKegiatan: {
        title: "KEGIATAN BELAJAR"
      },
      keunggulan: {
        title: "KEUNGGULAN"
      },
      mengapaMemilihKami: {
        title: "Mengapa Memilih Kami?",
        subTitle_1: "Guru Muda dan Berpengalaman",
        subTitle_2: "Berbagai Macam Bahan & Praktik",
        subTitle_3: "Pembelajaran yang Dipersonalisasi",
        subTitle_4: "Tingkat Keberhasilan Tinggi",
        desk_1: "Meskipun usia mereka masih muda, Guru Utama kami memiliki pengalaman mengajar yang luas. Usia mereka yang lebih dekat dengan siswa membantu membangun lingkungan belajar yang lebih relevan dan mudah didekati.",
        desk_2: "Kami menawarkan materi terkini dan sumber daya praktik, sehingga Anda akan selalu memiliki akses ke konten terkini.",
        desk_3: "Pelajaran kami disesuaikan dengan kebutuhan setiap siswa dengan sesi tatap muka, konsultasi gratis, dan penilaian.",
        desk_4: "Guru-guru Master kami yang berdedikasi memiliki tujuan untuk mencapai tingkat keberhasilan 90%, membantu siswa mencapai tujuan mereka dan diterima di sekolah yang mereka inginkan.",
      },
      benefitIgcse : {
        title: "Manfaat Memilih Kami:",
        subTitle_1: "Sistem Pembelajaran Privat",
        subTitle_2: "Laporan Kemajuan Bulanan",
        subTitle_3: "Latihan Soal dan Kunci Jawaban E-Book",
        subTitle_4: "Pendaftaran Gratis",
        subTitle_5: "Konsultasi Pribadi",
        desk_1: "Satu siswa di Satu Guru Utama untuk pengalaman belajar yang dipersonalisasi.",
        desk_2: "Guru Utama kami menilai kekuatan dan kelemahan siswa dan memberikan ringkasan setiap bulan.",
        desk_3: "Akses berbagai latihan dan jawaban kapan saja, di mana saja.",
        desk_4: "Tidak diperlukan biaya pendaftaran.",
        desk_5: "Tidak yakin tentang kursus atau program yang akan dipilih? Kami menawarkan konsultasi gratis untuk membantu Anda.",
      },
      onlyAtEDM: {
        title: "Hanya di Edumatrix",
        subTitle_1: "Anda dapat belajar langsung dengan tutor ahli.",
        subTitle_2: "Pembelajaran yang fleksibel: pilih kapan dan di mana Anda belajar.",
        subTitle_3: "Pelajar di seluruh Indonesia.",
        subTitle_4: "Materi pengajaran yang akurat dan berkualitas tinggi.",
        subTitle_5: "Kami menyediakan sumber daya, penilaian, dan soal latihan yang tepat dan berkualitas tinggi.",
      },
      liputan: {
        title: "TELAH DILIPUTI OLEH :"
      },
      faq: {
        title: "PERTANYAAN YANG SERING DIAJUKAN",
      },
      asalSekolahIgcse: {
        title: "ASAL SEKOLAH SISWA"
      },

      // HALAMAN KOTA IGCSE
      halamanKota: {
        title: "Tempat IGCSE, O Level, A Level & IB Tutor di",
        desk_1: "Edumatrix Indonesia menawarkan bimbingan belajar satu lawan satu IGCSE, O Level, A Level & IB di",
        desk_2: "untuk memberikan pengalaman belajar terbaik bagi siswa",
        desk_3: "Dapatkan layanan Les Privat kapan saja dan dimana saja dengan lebih dari 5.000 Guru Master Edumatrix yang siap memberikan layanan terbaik."
      },

      // TOEFL
      program: {
        title: "PROGRAM KAMI TOEFL-TOEIC-IELTS",
        ctaUmumToefl: "https://api.whatsapp.com/send?phone=6285712217876&text=Halo%20Kak%20Sari%20https://app.edumatrix-indonesia.com,%20saya%20ingin%20bertanya%20mengenai%20program%20TOEFL,%20TOEIC%20IELTS,%20English%20Conversation%20di%20Edumatrix.%20Apa%20saja%20jenis%20kursus%20dan%20pilihan%20paket%20sesinya?"
      },
      penjelasanToefl: {
        title_1: "Persiapan TOEFL",
        title_2: "Persiapan TOEIC",
        title_3: "Persiapan IELTS",
        title_4: "Percakapan Bahasa Inggris",
        desk_1: "Kuasai keterampilan yang dibutuhkan untuk tes TOEFL dengan kursus komprehensif kami. Fokus pada bagian membaca, menulis, mendengarkan, dan berbicara untuk meningkatkan skor Anda dan memenuhi persyaratan universitas atau imigrasi Anda.",
        desk_2: "Tingkatkan keterampilan bahasa Inggris bisnis Anda dengan program persiapan TOEIC kami. Sempurna untuk kemajuan karier, kursus ini mencakup kemampuan mendengarkan dan memahami bacaan dalam konteks profesional.",
        desk_3: "Raih skor tinggi pada ujian IELTS dengan latihan terarah dan bimbingan ahli. Program kami mencakup keempat komponen ujian - mendengarkan, membaca, menulis, dan berbicara.",
        desk_4: "Kembangkan keterampilan berbicara Anda dan dapatkan rasa percaya diri dengan program Percakapan Bahasa Inggris kami. Berlatihlah dalam skenario kehidupan nyata dan tingkatkan kemampuan Anda untuk berkomunikasi secara efektif.",
      },
      paketToeflPriority: {
        title: "PAKET BELAJAR TOEFL - TOEIC - IELTS",
        point_1: "Jadwal fleksibel",
        point_2: "Pelajaran 120 menit",
        point_3: "10x sesi pembelajaran (Mendengarkan, Struktur & Ekspresi Tertulis, Membaca)",
        point_4: "Termasuk e-book dengan materi, pertanyaan, dan penjelasan",
        point_5: "Akses ke latihan soal latihan",
        point_6: "Laporan kemajuan bulanan",
        point_7: "Biaya pendaftaran gratis",
        point_8: "Prediksi Skor TOEFL",
        point_9: "Tes tiruan IELTS",
        point_10: "Konsultasi akademis gratis",
        point_11: "Rekaman sesi",
        button: "PILIH PAKET",
        cta: "https://api.whatsapp.com/send?phone=6285712217876&text=Halo%20Kak%20Sari%20https://app.edumatrix-indonesia.com,%20saya%20ingin%20mendaftar%20untuk%20ujian%20TOEFL%20Paket%20Priority."
      },
      paketToeflDeluxe: {
        point_1: "Jadwal fleksibel",
        point_2: "Pelajaran 90 menit",
        point_3: "10x sesi pembelajaran (Mendengarkan, Struktur & Ekspresi Tertulis, Membaca)",
        point_4: "Termasuk e-book dengan materi, pertanyaan, dan penjelasan",
        point_5: "Akses ke latihan soal latihan",
        point_6: "Laporan kemajuan bulanan",
        point_7: "Biaya pendaftaran gratis",
        point_8: "Prediksi Skor TOEFL",
        point_9: "Tes tiruan IELTS",
        point_10: "Konsultasi akademis gratis",
        point_11: "Rekaman sesi",
        button: "PILIH PAKET",
        cta: "https://api.whatsapp.com/send?phone=6285712217876&text=Halo%20Kak%20Sari%20https://app.edumatrix-indonesia.com,%20saya%20ingin%20mendaftar%20untuk%20ujian%20TOEFL%20Paket%20Deluxe."
      },
      kegiatanBelajar: {
        title: "KEGIATAN BELAJAR"
      },
      sistemBelajar: {
        title: "SISTEM PEMBELAJARAN EDUMATRIX",
        desk_1: "Belajar melalui Zoom, memudahkan siswa untuk merekam sesi belajar",
        desk_2: "Tutor datang ke rumah siswa/ Belajar dengan nyaman di kantor Edumatrix",
        link: "Baca Selengkapnya",
        ctaOn: "https://api.whatsapp.com/send?phone=6285712217876&text=Halo%20Kak%20Sari%20https://app.edumatrix-indonesia.com,%20saya%20ingin%20mendaftar%20di%20bimbingan%20belajar%20TOEFL,%20TOEIC,%20&%20IELTS%20Online.",
        ctaOff: "https://api.whatsapp.com/send?phone=6285712217876&text=Halo%20Kak%20Sari%20https://app.edumatrix-indonesia.com,%20saya%20ingin%20mendaftar%20di%20bimbingan%20belajar%20TOEFL,%20TOEIC,%20&%20IELTS%20Offline."
      },
      testimoni: {
        title: "TESTIMONI SISWA"
      },

      // HALAMAN KOTA TOEFL
      halamanKotaToefl: {
        title: "TOEFL, TOEIC, IELTS, dan English Conversation Lessons di",
        desk_1: "Les Privat TOEFL, TOEIC, IELTS dan Percakapan Bahasa Inggris di",
        desk_3: "Dapatkan layanan Les Privat kapan saja dan dimana saja dengan lebih dari 5.000 Guru Master Edumatrix yang siap memberikan layanan terbaik."
      },
      content: {},
    },
  },
};

i18n.use(initReactI18next).init({
  resources,

  lng: "bn",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

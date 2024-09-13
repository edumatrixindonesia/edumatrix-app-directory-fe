import i18n from "i18next";
import { initReactI18next } from "react-i18next";

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
        button: "SELECT PACKAGE"
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
        button: "PILIH PAKET"
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
        button: "PILIH PAKET"
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

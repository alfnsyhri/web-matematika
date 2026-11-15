export interface Lecturer {
  id: number;
  name: string;
  nip: string;
  prodi: 'Pendidikan Matematika' | 'Matematika' | 'Ilmu Komputer' | 'Statistika';
  level: 'Profesor' | 'Doktor' | 'Magister';
  field: string;
  originalProdi?: string;
}

export const lecturersData: Lecturer[] = [
  {
    "id": 1,
    "name": "Prof. Dr. Syawal Gultom, M.Pd",
    "nip": "196202031987031002",
    "prodi": "Pendidikan Matematika",
    "level": "Profesor",
    "field": "Pendidikan Matematika",
    "originalProdi": "Pend. Matematika"
  },
  {
    "id": 2,
    "name": "Prof. Dr. Sahat Saragih, M.Pd",
    "nip": "196102051988031003",
    "prodi": "Pendidikan Matematika",
    "level": "Profesor",
    "field": "Pendidikan Matematika",
    "originalProdi": "S3 Pend. Matematika"
  },
  {
    "id": 3,
    "name": "Prof. Dr. Asmin, M.Pd",
    "nip": "195708041985031002",
    "prodi": "Pendidikan Matematika",
    "level": "Profesor",
    "field": "Pendidikan Matematika",
    "originalProdi": "S2 Pend. Matematika"
  },
  {
    "id": 4,
    "name": "Prof. Dr. Mukhtar, M.Pd",
    "nip": "195908071983031033",
    "prodi": "Pendidikan Matematika",
    "level": "Profesor",
    "field": "Pendidikan Matematika",
    "originalProdi": "S3 Pend. Matematika"
  },
  {
    "id": 5,
    "name": "Prof. Dr. Hasratuddin, M.Pd",
    "nip": "196312311991031030",
    "prodi": "Pendidikan Matematika",
    "level": "Profesor",
    "field": "Pendidikan Matematika",
    "originalProdi": "S3 Pend. Matematika"
  },
  {
    "id": 6,
    "name": "Prof. Dr. Edi Syahputra, M.Pd",
    "nip": "195701211989031001",
    "prodi": "Pendidikan Matematika",
    "level": "Profesor",
    "field": "Pendidikan Matematika",
    "originalProdi": "S3 Pend. Matematika"
  },
  {
    "id": 7,
    "name": "Prof. Dr. Bornok Sinaga, M.Pd",
    "nip": "196509101991021001",
    "prodi": "Pendidikan Matematika",
    "level": "Profesor",
    "field": "Pendidikan Matematika",
    "originalProdi": "S3 Pend. Matematika"
  },
  {
    "id": 8,
    "name": "Prof. Drs. Dian Armanto, M.Pd, M.A.,M.Sc, Ph.D",
    "nip": "196310111988031001",
    "prodi": "Pendidikan Matematika",
    "level": "Profesor",
    "field": "Pendidikan Matematika",
    "originalProdi": "Pend. Matematika"
  },
  {
    "id": 9,
    "name": "Prof. Drs. Zul Amry, M.Si, Ph.D",
    "nip": "196007071987031002",
    "prodi": "Statistika",
    "level": "Profesor",
    "field": "Statistika",
    "originalProdi": "Statistika"
  },
  {
    "id": 10,
    "name": "Prof. Dr. Yulita Molliq Rangkuti, M.Sc",
    "nip": "197601222009122001",
    "prodi": "Matematika",
    "level": "Profesor",
    "field": "Matematika",
    "originalProdi": "Matematika"
  },
  {
    "id": 11,
    "name": "Dr. Asrin Lubis, M.Pd",
    "nip": "196010021987031004",
    "prodi": "Pendidikan Matematika",
    "level": "Doktor",
    "field": "Pendidikan Matematika",
    "originalProdi": "Pendidikan Matematika"
  },
  {
    "id": 12,
    "name": "Dr. Edy Surya, M.Si",
    "nip": "196710191992031003",
    "prodi": "Pendidikan Matematika",
    "level": "Doktor",
    "field": "Pendidikan Matematika",
    "originalProdi": "Pend. Matematika"
  },
  {
    "id": 13,
    "name": "Dr. Kms. M. Amin Fauzi, M.Pd",
    "nip": "196406291993031001",
    "prodi": "Pendidikan Matematika",
    "level": "Doktor",
    "field": "Pendidikan Matematika",
    "originalProdi": "S2 Pend. Matematika"
  },
  {
    "id": 14,
    "name": "Dra. N. Manurung, M.Pd",
    "nip": "196203051987032003",
    "prodi": "Pendidikan Matematika",
    "level": "Magister",
    "field": "Pendidikan Matematika",
    "originalProdi": "Pend. Matematika"
  },
  {
    "id": 15,
    "name": "Dra. Katrina Samosir, M.Pd",
    "nip": "196308281989032003",
    "prodi": "Pendidikan Matematika",
    "level": "Magister",
    "field": "Pendidikan Matematika",
    "originalProdi": "Pend. Matematika"
  },
  {
    "id": 16,
    "name": "Drs. Yasifati Hia, M.Si",
    "nip": "196304011989031004",
    "prodi": "Pendidikan Matematika",
    "level": "Magister",
    "field": "Pendidikan Matematika",
    "originalProdi": "Pend. Matematika"
  },
  {
    "id": 17,
    "name": "Dr. W. Rajagukguk,M.Pd",
    "nip": "196110051986011001",
    "prodi": "Pendidikan Matematika",
    "level": "Doktor",
    "field": "Pendidikan Matematika",
    "originalProdi": "Pendidikan Matematika"
  },
  {
    "id": 18,
    "name": "Dr. Faiz. Ahyaningsih, M.Si",
    "nip": "196606261997022001",
    "prodi": "Matematika",
    "level": "Doktor",
    "field": "Matematika",
    "originalProdi": "Matematika"
  },
  {
    "id": 19,
    "name": "Dr. Izwita Dewi, M.Pd",
    "nip": "196207061989032001",
    "prodi": "Pendidikan Matematika",
    "level": "Doktor",
    "field": "Pendidikan Matematika",
    "originalProdi": "S2 Pend. Matematika"
  },
  {
    "id": 20,
    "name": "Dr. Nerli Khairani, M.Si",
    "nip": "196801141994122001",
    "prodi": "Matematika",
    "level": "Doktor",
    "field": "Matematika",
    "originalProdi": "Matematika"
  },
  {
    "id": 21,
    "name": "Drs. W.L Sihombing, M.Pd",
    "nip": "196107131987031001",
    "prodi": "Pendidikan Matematika",
    "level": "Magister",
    "field": "Pendidikan Matematika",
    "originalProdi": "Pendidikan Matematika"
  },
  {
    "id": 22,
    "name": "Dr. E. Elvis Napitupulu, M.S.",
    "nip": "196312251988031004",
    "prodi": "Pendidikan Matematika",
    "level": "Doktor",
    "field": "Pendidikan Matematika",
    "originalProdi": "S2 Pend. Matematika"
  },
  {
    "id": 23,
    "name": "Dr. Hamidah Nasution, M.Si",
    "nip": "196707061995122001",
    "prodi": "Matematika",
    "level": "Doktor",
    "field": "Matematika",
    "originalProdi": "Matematika"
  },
  {
    "id": 24,
    "name": "Dr. Mulyono, M.Si",
    "nip": "197112311999031010",
    "prodi": "Pendidikan Matematika",
    "level": "Doktor",
    "field": "Pendidikan Matematika",
    "originalProdi": "S2 Pendidikan Matematika"
  },
  {
    "id": 25,
    "name": "Dr. Pardomuan Sitompul, M.Si",
    "nip": "196911261997021001",
    "prodi": "Matematika",
    "level": "Doktor",
    "field": "Matematika",
    "originalProdi": "Matematika"
  },
  {
    "id": 26,
    "name": "Dr. Abil Mansyur, M.Si",
    "nip": "197209061999031002",
    "prodi": "Matematika",
    "level": "Doktor",
    "field": "Matematika",
    "originalProdi": "Matematika"
  },
  {
    "id": 27,
    "name": "Dr. Hermawan Syahputra, M.Si",
    "nip": "198009302003121002",
    "prodi": "Ilmu Komputer",
    "level": "Doktor",
    "field": "Ilmu Komputer",
    "originalProdi": "Ilmu Komputer"
  },
  {
    "id": 28,
    "name": "Kairuddin, S.Si, M.Pd",
    "nip": "197707112005011003",
    "prodi": "Pendidikan Matematika",
    "level": "Magister",
    "field": "Pendidikan Matematika",
    "originalProdi": "Pend. Matematika"
  },
  {
    "id": 29,
    "name": "Zulfahmi Indra, S.Si, M.Cs",
    "nip": "197302112005011001",
    "prodi": "Ilmu Komputer",
    "level": "Magister",
    "field": "Ilmu Komputer",
    "originalProdi": "Ilmu Komputer"
  },
  {
    "id": 30,
    "name": "Chairunisah, S.Si, M.Si",
    "nip": "198105172005012001",
    "prodi": "Matematika",
    "level": "Magister",
    "field": "Matematika",
    "originalProdi": "Matematika"
  },
  {
    "id": 31,
    "name": "Said Iskandar, S.Si, M.Si",
    "nip": "197703182005011001",
    "prodi": "Ilmu Komputer",
    "level": "Magister",
    "field": "Ilmu Komputer",
    "originalProdi": "Ilmu Komputer"
  },
  {
    "id": 32,
    "name": "Marlina Setia Sinaga, S.Si, M.Si",
    "nip": "197405272005012001",
    "prodi": "Matematika",
    "level": "Magister",
    "field": "Matematika",
    "originalProdi": "Matematika"
  },
  {
    "id": 33,
    "name": "Denny  Haris, S.Si, M.Pd",
    "nip": "198009172005011001",
    "prodi": "Pendidikan Matematika",
    "level": "Magister",
    "field": "Pendidikan Matematika",
    "originalProdi": "Pend. Matematika"
  },
  {
    "id": 34,
    "name": "Arnah Ritonga, S.Si, M.Si",
    "nip": "198012162005012003",
    "prodi": "Matematika",
    "level": "Magister",
    "field": "Matematika",
    "originalProdi": "Matematika"
  },
  {
    "id": 35,
    "name": "Susiana, S.Si, M.Si",
    "nip": "197905192005012004",
    "prodi": "Statistika",
    "level": "Magister",
    "field": "Statistika",
    "originalProdi": "Statistika"
  },
  {
    "id": 36,
    "name": "Erlinawaty Simanjuntak, S.Pd, M.Si",
    "nip": "198109042008122001",
    "prodi": "Pendidikan Matematika",
    "level": "Magister",
    "field": "Pendidikan Matematika",
    "originalProdi": "Pend. Matematika"
  },
  {
    "id": 37,
    "name": "Budi Halomoan Siregar, S.Pd, M.Sc",
    "nip": "198112172008121001",
    "prodi": "Pendidikan Matematika",
    "level": "Magister",
    "field": "Pendidikan Matematika",
    "originalProdi": "Pend. Matematika"
  },
  {
    "id": 38,
    "name": "Prihatin Ningsih Sagala, S.Pd, M.Si",
    "nip": "198108232008012007",
    "prodi": "Pendidikan Matematika",
    "level": "Magister",
    "field": "Pendidikan Matematika",
    "originalProdi": "Pend. Matematika"
  },
  {
    "id": 39,
    "name": "Pardomuan N.J.M. Sinambela, S.Pd, M.Pd",
    "nip": "197806112008011009",
    "prodi": "Pendidikan Matematika",
    "level": "Magister",
    "field": "Pendidikan Matematika",
    "originalProdi": "Pend. Matematika"
  },
  {
    "id": 40,
    "name": "Lasker P. Sinaga, S.Si, M.Si",
    "nip": "197908022009121002",
    "prodi": "Matematika",
    "level": "Magister",
    "field": "Matematika",
    "originalProdi": "Matematika"
  },
  {
    "id": 41,
    "name": "Dr. Arnita, M.Si",
    "nip": "198207172010122002",
    "prodi": "Statistika",
    "level": "Doktor",
    "field": "Statistika",
    "originalProdi": "Statistika"
  },
  {
    "id": 42,
    "name": "Dr. Elmanani  Simamora, M.Si",
    "nip": "197211162006041001",
    "prodi": "Matematika",
    "level": "Doktor",
    "field": "Matematika",
    "originalProdi": "Matematika"
  },
  {
    "id": 43,
    "name": "Muliawan Firdaus, S.Pd, M.Si",
    "nip": "197905222005011004",
    "prodi": "Pendidikan Matematika",
    "level": "Magister",
    "field": "Pendidikan Matematika",
    "originalProdi": "Pend. Matematika"
  },
  {
    "id": 44,
    "name": "Faridawaty Marpaung, S.Si, M.Si",
    "nip": "197110302008122001",
    "prodi": "Matematika",
    "level": "Magister",
    "field": "Matematika",
    "originalProdi": "Matematika"
  },
  {
    "id": 45,
    "name": "Tiur Malasari Siregar, S.Pd, M.Si",
    "nip": "198002282006042003",
    "prodi": "Pendidikan Matematika",
    "level": "Magister",
    "field": "Pendidikan Matematika",
    "originalProdi": "Pend. Matematika"
  },
  {
    "id": 46,
    "name": "Tri Andri Hutapea, S.Si, M.Si",
    "nip": "198104192006041001",
    "prodi": "Matematika",
    "level": "Magister",
    "field": "Matematika",
    "originalProdi": "Matematika"
  },
  {
    "id": 47,
    "name": "Sudianto  Manullang, S,Si, M.Si",
    "nip": "198107302006041001",
    "prodi": "Statistika",
    "level": "Magister",
    "field": "Statistika",
    "originalProdi": "Statistika"
  },
  {
    "id": 48,
    "name": "Sri Lestari Manurung, S.Pd, M.Pd",
    "nip": "198303122010122007",
    "prodi": "Pendidikan Matematika",
    "level": "Magister",
    "field": "Pendidikan Matematika",
    "originalProdi": "Pend. Matematika"
  },
  {
    "id": 49,
    "name": "Glory Indira D. Purba, S.Si, M.Pd",
    "nip": "198405052010122004",
    "prodi": "Pendidikan Matematika",
    "level": "Magister",
    "field": "Pendidikan Matematika",
    "originalProdi": "Pend. Matematika"
  },
  {
    "id": 50,
    "name": "Nurhasanah Siregar, S.Pd, M.Pd",
    "nip": "198311112008122001",
    "prodi": "Pendidikan Matematika",
    "level": "Magister",
    "field": "Pendidikan Matematika",
    "originalProdi": "Pend. Matematika"
  },
  {
    "id": 51,
    "name": "Mangaratua M. Simanjorang, M.Pd, Ph.D",
    "nip": "198005212008011001",
    "prodi": "Pendidikan Matematika",
    "level": "Doktor",
    "field": "Pendidikan Matematika",
    "originalProdi": "S2 Pendidikan Matematika"
  },
  {
    "id": 52,
    "name": "Eri Widyastuti, S.Pd, M.Sc",
    "nip": "198103272006042003",
    "prodi": "Pendidikan Matematika",
    "level": "Magister",
    "field": "Pendidikan Matematika",
    "originalProdi": "Pend. Matematika"
  },
  {
    "id": 53,
    "name": "Hanna Dewi Marina Hutabarat, S.Si, M.Si",
    "nip": "198105022008122001",
    "prodi": "Statistika",
    "level": "Magister",
    "field": "Statistika",
    "originalProdi": "Statistika"
  },
  {
    "id": 54,
    "name": "Elfitra, S.Pd, M.Si",
    "nip": "198206262008122003",
    "prodi": "Pendidikan Matematika",
    "level": "Magister",
    "field": "Pendidikan Matematika",
    "originalProdi": "Pend. Matematika"
  },
  {
    "id": 55,
    "name": "Ade Andriani, S.Pd, M.Pd",
    "nip": "198504192008122002",
    "prodi": "Pendidikan Matematika",
    "level": "Magister",
    "field": "Pendidikan Matematika",
    "originalProdi": "Pend. Matematika"
  },
  {
    "id": 56,
    "name": "Nice Rejoice Refisis, S.Pd, M.Si",
    "nip": "198403032009122003",
    "prodi": "Pendidikan Matematika",
    "level": "Magister",
    "field": "Pendidikan Matematika",
    "originalProdi": "Pend. Matematika"
  },
  {
    "id": 57,
    "name": "Didi Febrian, S.Si, M.Sc",
    "nip": "198502112014041001",
    "prodi": "Matematika",
    "level": "Magister",
    "field": "Matematika",
    "originalProdi": "Matematika"
  },
  {
    "id": 58,
    "name": "Muhammad Badzlan Darari, S.Pd, M.Pd",
    "nip": "198703252015041002",
    "prodi": "Pendidikan Matematika",
    "level": "Magister",
    "field": "Pendidikan Matematika",
    "originalProdi": "Pend. Matematika"
  },
  {
    "id": 59,
    "name": "Andrea Arifsyah Nasution, S.Pd, M.Sc",
    "nip": "198606042015041002",
    "prodi": "Pendidikan Matematika",
    "level": "Magister",
    "field": "Pendidikan Matematika",
    "originalProdi": "Pend. Matematika"
  },
  {
    "id": 60,
    "name": "Suci Frisnoiry, S.Pd, M.Pd",
    "nip": "198805282015042001",
    "prodi": "Pendidikan Matematika",
    "level": "Magister",
    "field": "Pendidikan Matematika",
    "originalProdi": "Pend. Matematika"
  },
  {
    "id": 61,
    "name": "Dinda Kartika, S.Pd, M.Si",
    "nip": "199112032019032014",
    "prodi": "Matematika",
    "level": "Magister",
    "field": "Matematika",
    "originalProdi": "Matematika"
  },
  {
    "id": 62,
    "name": "Fevi Rahmawati Suwanto, S.Pd, M.Pd",
    "nip": "199303162019032021",
    "prodi": "Pendidikan Matematika",
    "level": "Magister",
    "field": "Pendidikan Matematika",
    "originalProdi": "Pend. Matematika"
  },
  {
    "id": 63,
    "name": "Kana Saputra S., S.Pd, M.Kom",
    "nip": "199008162019031015",
    "prodi": "Ilmu Komputer",
    "level": "Magister",
    "field": "Ilmu Komputer",
    "originalProdi": "Ilmu Komputer"
  },
  {
    "id": 64,
    "name": "Michael Christian Simanullang, S.Pd, M.Pd",
    "nip": "199201052019031019",
    "prodi": "Pendidikan Matematika",
    "level": "Magister",
    "field": "Pendidikan Matematika",
    "originalProdi": "Pend. Matematika"
  },
  {
    "id": 65,
    "name": "Debi Yandra Niska, S.Kom, M.Kom",
    "nip": "199011192019031014",
    "prodi": "Ilmu Komputer",
    "level": "Magister",
    "field": "Ilmu Komputer",
    "originalProdi": "Ilmu Komputer"
  },
  {
    "id": 66,
    "name": "Insan Taufik, S.Kom, M.Kom",
    "nip": "199102092019031012",
    "prodi": "Ilmu Komputer",
    "level": "Magister",
    "field": "Ilmu Komputer",
    "originalProdi": "Ilmu Komputer"
  },
  {
    "id": 67,
    "name": "Dr. Eng. Mansur. AS, S.Kom., M.T.",
    "nip": "198206112020121000",
    "prodi": "Ilmu Komputer",
    "level": "Doktor",
    "field": "Ilmu Komputer",
    "originalProdi": "Ilmu Komputer"
  },
  {
    "id": 68,
    "name": "Nadrah Afiati Nasution, S.Pd., M.Pd",
    "nip": "199307172022032014",
    "prodi": "Pendidikan Matematika",
    "level": "Magister",
    "field": "Pendidikan",
    "originalProdi": "Pend. Matematika"
  },
  {
    "id": 69,
    "name": "Dian Septiana, S.Pd., M.Sc",
    "nip": "198909202022032009",
    "prodi": "Statistika",
    "level": "Magister",
    "field": "Statistika",
    "originalProdi": "Statistika"
  },
  {
    "id": 70,
    "name": "Nurul Ain Farhana, M.Si",
    "nip": "199507042022032012",
    "prodi": "Statistika",
    "level": "Magister",
    "field": "Statistika Terapan",
    "originalProdi": "Statistika"
  },
  {
    "id": 71,
    "name": "Nurul Maulida Surbakti, S.Si., M.Si",
    "nip": "199408312022032011",
    "prodi": "Statistika",
    "level": "Magister",
    "field": "Aljabar",
    "originalProdi": "Statistika"
  },
  {
    "id": 72,
    "name": "Putri Maulidina Fadilah, S.Si., M.Si",
    "nip": "199608052022032015",
    "prodi": "Statistika",
    "level": "Magister",
    "field": "Statistika Terapan",
    "originalProdi": "Statistika"
  },
  {
    "id": 73,
    "name": "Sisti Nadia Amalia, S.Pd., M.Stat",
    "nip": "199309022022032014",
    "prodi": "Statistika",
    "level": "Magister",
    "field": "Statistika Terapan",
    "originalProdi": "Statistika"
  },
  {
    "id": 74,
    "name": "Suvriadi Panggabean, M.Si",
    "nip": "198804182022031007",
    "prodi": "Matematika",
    "level": "Magister",
    "field": "Operasi Riset",
    "originalProdi": "Matematika"
  },
  {
    "id": 75,
    "name": "Adidtya Perdana, S.T., M. Kom",
    "nip": "198912242022031009",
    "prodi": "Ilmu Komputer",
    "level": "Magister",
    "field": "Ilmu Komputer",
    "originalProdi": "Ilmu Komputer"
  },
  {
    "id": 76,
    "name": "Dedy Kiswanto, S.Kom., M.Kom",
    "nip": "199002162022031003",
    "prodi": "Ilmu Komputer",
    "level": "Magister",
    "field": "Ilmu Komputer",
    "originalProdi": "Ilmu Komputer"
  },
  {
    "id": 77,
    "name": "Fanny Ramadhani, S.Kom., M.kom",
    "nip": "199303092022032015",
    "prodi": "Ilmu Komputer",
    "level": "Magister",
    "field": "Ilmu Komputer",
    "originalProdi": "Ilmu Komputer"
  },
  {
    "id": 78,
    "name": "Ichwanul Muslim Karo Karo, S.Kom., M.Kom",
    "nip": "199309162022031010",
    "prodi": "Ilmu Komputer",
    "level": "Magister",
    "field": "Ilmu Komputer",
    "originalProdi": "Ilmu Komputer"
  },
  {
    "id": 79,
    "name": "Putri Harliana, S.T., M.Kom",
    "nip": "199003232022032009",
    "prodi": "Ilmu Komputer",
    "level": "Magister",
    "field": "Ilmu Komputer",
    "originalProdi": "Ilmu Komputer"
  },
  {
    "id": 80,
    "name": "Sri Dewi, S.Kom., M.Kom",
    "nip": "199606272022032018",
    "prodi": "Ilmu Komputer",
    "level": "Magister",
    "field": "Ilmu Komputer",
    "originalProdi": "Ilmu Komputer"
  },
  {
    "id": 81,
    "name": "Rizki Habibi, S.Pd., M.Si",
    "nip": "198502252023211012",
    "prodi": "Matematika",
    "level": "Magister",
    "field": "Matematika",
    "originalProdi": "Matematika"
  },
  {
    "id": 82,
    "name": "Imelda Wardani Br Rambe, S.Pd.I., M.Pd",
    "nip": "199101192023212031",
    "prodi": "Pendidikan Matematika",
    "level": "Magister",
    "field": "Pendidikan Matematika",
    "originalProdi": "Pend. Matematika"
  },
  {
    "id": 83,
    "name": "Philips Pasca G Siagian, S. Pd., M. Pd",
    "nip": "199407272023211000",
    "prodi": "Pendidikan Matematika",
    "level": "Magister",
    "field": "Pendidikan Matematika",
    "originalProdi": "Pend. Matematika"
  },
  {
    "id": 84,
    "name": "Suwanto, M.Pd",
    "nip": "198903272023211021",
    "prodi": "Pendidikan Matematika",
    "level": "Magister",
    "field": "Pendidikan Matematika",
    "originalProdi": "Pend. Matematika"
  },
  {
    "id": 85,
    "name": "Alvi Sahrin Nasution, S.Si, M.Si",
    "nip": "199008202024062001",
    "prodi": "Matematika",
    "level": "Magister",
    "field": "Matematika",
    "originalProdi": "Matematika"
  },
  {
    "id": 86,
    "name": "Wiwin Handoko, S.Kom., M.Kom",
    "nip": "-",
    "prodi": "Ilmu Komputer",
    "level": "Magister",
    "field": "Ilmu Komputer",
    "originalProdi": "Ilmu Komputer"
  },
  {
    "id": 87,
    "name": "Dr. Sri Wahyuni, S.Kom., M.Kom",
    "nip": "-",
    "prodi": "Ilmu Komputer",
    "level": "Doktor",
    "field": "Ilmu Komputer",
    "originalProdi": "Ilmu Komputer"
  },
  {
    "id": 88,
    "name": "Muhammad hafiz M.Si",
    "nip": "-",
    "prodi": "Matematika",
    "level": "Magister",
    "field": "Matematika",
    "originalProdi": "Matematika"
  },
  {
    "id": 89,
    "name": "Hadijah, S.Si., M.Si",
    "nip": "-",
    "prodi": "Statistika",
    "level": "Magister",
    "field": "Statistika",
    "originalProdi": "Statistika"
  }
];

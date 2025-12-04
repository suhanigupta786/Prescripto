import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import doc16 from './doc16.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Richard James',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Richard James is an experienced General Physician with an MBBS degree and 4 years of clinical practice. He focuses on comprehensive patient care, emphasizing early diagnosis, preventive measures, and effective treatment plans. Known for his attentive approach and strong clinical judgment, Dr. James works closely with his patients to ensure their long-term health and wellness. His dedication to providing compassionate, dependable medical support makes him a trusted primary care specialist.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Emily Larson',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Emily Larson is a dedicated Gynecologist with an MBBS degree and 3 years of clinical experience. She is passionate about supporting women’s reproductive health, offering compassionate care through diagnosis, treatment, and guidance across all stages of life. Dr. Larson focuses on creating a safe and comfortable space where patients feel heard, informed, and confident in their care journey.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Sarad Patel',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Sarad Patel is a skilled Dermatologist with an MBBS degree and 1 year of clinical experience. She specializes in diagnosing and treating a wide range of skin, hair, and nail conditions, with a focus on personalized treatment plans. Dr. Patel is committed to helping patients achieve healthy, confident skin through modern techniques and attentive care. If you’d like, I can make it shorter or more detailed!',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Christopher Lee',
        image: doc4,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Christopher Lee is a compassionate Pediatrician with an MBBS degree and 2 years of experience in children’s healthcare. He is dedicated to providing gentle and effective medical care, focusing on early diagnosis, preventive treatments, and child development. Dr. Lee works closely with families to ensure a nurturing environment and strives to make every young patient feel comfortable and cared for.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Jennifer Garcia',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Jennifer Garcia is an experienced Neurologist with an MBBS degree and 4 years of clinical practice. She specializes in diagnosing and treating disorders of the brain and nervous system, with a patient-focused approach that emphasizes clarity, comfort, and long-term wellness. Dr. Garcia is committed to providing personalized care, using modern techniques to help patients manage neurological conditions and improve their quality of life.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Andrew Williams',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Andrew Williams is a dedicated Neurologist with an MBBS degree and 4 years of hands-on experience. His expertise lies in diagnosing and treating a wide range of neurological conditions with precision and empathy. Dr. Williams prioritizes patient comfort, detailed evaluation, and tailored treatment plans to support long-term neurological health. His calm approach and commitment to continuous learning make him a trusted choice for patients seeking comprehensive nervous system care.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Christopher Davis',
        image: doc7,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Timothy White',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Timothy White is a dedicated Gynecologist with an MBBS degree and 3 years of professional experience. He is committed to supporting women’s health through accurate diagnosis, compassionate guidance, and effective treatment. Dr. White focuses on patient comfort, clear communication, and preventive care, ensuring every patient feels understood and well-supported throughout their journey. His calm, reassuring approach makes him a trusted choice for women’s healthcare needs.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Ava Mitchell',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Ava Mitchell is a skilled Dermatologist with an MBBS degree and 1 year of clinical experience. She is passionate about helping patients achieve healthy skin through personalized treatment plans and early intervention. Dr. Mitchell focuses on diagnosing and treating a wide range of skin concerns with precision and care. Her warm, patient-centered approach ensures individuals feel heard, confident, and supported throughout their skincare journey.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Jeffrey King',
        image: doc10,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Jeffrey King is a compassionate Pediatrician with an MBBS degree and 2 years of experience caring for children of all ages. He is dedicated to promoting healthy development through attentive evaluation, preventive care, and effective treatment. Dr. King’s friendly and calm approach helps young patients feel at ease, while his clear communication reassures parents throughout every stage of care.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Zoe Kelly',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Zoe Kelly is a highly skilled Neurologist with an MBBS degree and 4 years of clinical experience. She specializes in diagnosing and managing disorders of the brain and nervous system, offering personalized care to help patients improve their neurological well-being. Dr. Kelly is known for her patient-centered approach, clear communication, and commitment to providing evidence-based treatments tailored to each individual’s needs.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Patrick Harris',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Patrick Harris is an experienced Neurologist with an MBBS degree and 4 years of dedicated practice in treating conditions related to the brain and nervous system. He focuses on thorough evaluation, early diagnosis, and personalized treatment plans to help improve patients’ quality of life. Known for his calm demeanor and thoughtful guidance, Dr. Harris ensures every patient feels supported and well-informed throughout their care journey.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Chloe Evans',
        image: doc13,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Chloe Evans is a dedicated General Physician with an MBBS degree and 4 years of experience providing comprehensive medical care. She focuses on preventive healthcare, accurate diagnosis, and effective treatment to support long-term wellness. Dr. Evans is known for her attentive listening, compassionate approach, and commitment to helping patients make informed decisions about their health.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Ryan Martinez',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Ryan Martinez is a skilled Gynecologist with an MBBS degree and 3 years of experience in women’s reproductive health. He is dedicated to providing patient-centered care, offering guidance through routine check-ups, fertility concerns, and personalized prenatal support. Known for his calm and reassuring approach, Dr. Martinez ensures that every patient feels heard, informed, and comfortable throughout their healthcare journey.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Amelia Hill',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Amelia Hill is an enthusiastic Dermatologist with an MBBS degree and 1 year of experience specializing in skin, hair, and nail health. She is passionate about helping patients achieve healthy, confident skin through personalized treatments and evidence-based care. With a warm and approachable nature, Dr. Hill focuses on early diagnosis, preventive routines, and effective solutions for both cosmetic and medical skin concerns.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
    _id: 'doc16',
    name: 'Dr. Benjamin Carter',
    image: doc16,
    speciality: 'Gastroenterologist',
    degree: 'MBBS',
    experience: '3 Years',
    about: 'Dr. Benjamin Carter is a dedicated Gastroenterologist with an MBBS and MD in Gastroenterology, backed by 3 years of clinical experience. He specializes in diagnosing and treating digestive and liver-related conditions, offering personalized care focused on long-term wellness. Known for his precise approach and patient-friendly communication, Dr. Carter ensures his patients feel supported and informed throughout their treatment journey.',
    fees: 40,
    address: {
        line1: '37th Cross, Richmond',
        line2: 'Circle, Ring Road, London'
    }

    }
]
import Testimonial1 from '../../assets/images/testimonial1.jpg';
import Testimonial2 from '../../assets/images/testimonial2.jpg';
import Doctor1 from '../../assets/images/doctor1.jpg';
import Doctor2 from '../../assets/images/doctor2.jpg';

export const Testimonials = [
    {
        name: "Shyam Singh",
        description: `I got the best treatment ever. Highly recommend. 
        Dr. Shayam treated my long lasting back pain.`,
        image: Testimonial1,
        position: "Shopkeeper"
    },
    {
        name: "Hari Prasad",
        description: "Dr. Natalie treaded my wife. Infact I will name my new born daughteras Natalie Prasad.",
        image: Testimonial2,
        position: "Businessman"
    },
]

export const doctorsList = [
    {
      doctorId: 0,
      name: 'Dr. Ishan Bhateja',
      qualification: 'M.B.B.S, M.S(General Surgery)',
      position: 'Chief Orthopaedic',
      experience: '5',
      imageURL: Doctor1,
      description:
        'Dr. Ishaan is one of the most prominent doctor in the region. He has 5 years of experience in dealing with C-Section deliveries, trauma(fracture) and joint ache related issue.He expertise has helped many get relieved from their ailments and ortho related pains.',
    },
    {
      doctorId: 1,
      name: 'Dr. Natalie Bhateja',
      qualification: 'M.B.B.S',
      position: 'Chief Orthopaedic',
      experience: '5',
      imageURL: Doctor2,
      description:
        'Dr. Natalie is one of the most prominent doctor in the region. He has 5 years of experience in dealing with C-Section deliveries, trauma(fracture) and joint ache related issue.He expertise has helped many get relieved from their ailments and ortho related pains.',
    },
  ];

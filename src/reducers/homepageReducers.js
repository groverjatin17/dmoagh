import { MENU, CURRENT_SUBMENU } from '../actions/Homepage.actions';

const menuItems = [
    {
      menuItemId: 0,
      menuItemTitle: 'About Us',
      subItems: [
        {
          subItemId: 0,
          subItemTitle: 'Profile Of Doctor',
          subItemLink: '/profileOfDoctor',
        },
        {
          subItemId: 1,
          subItemTitle: 'Our Clinic',
          subItemLink: '/ourClinic',
        },
        {
          subItemId: 2,
          subItemTitle: 'Our Gallery',
          subItemLink: '/ourGallery',
        },
      ],
    },
    {
      menuItemId: 1,
      menuItemTitle: 'Services',
      subItems: [
        {
          subItemId: 0,
          subItemTitle: 'Conditions',
          subItemLink: '/conditions',
        },
        {
          subItemId: 1,
          subItemTitle: 'Facilities',
          subItemLink: '/facilities',
        },
        {
          subItemId: 2,
          subItemTitle: 'Surgery',
          subItemLink: '/surgery',
        },
      ],
    },
    {
      menuItemId: 2,
      menuItemTitle: 'Procedures',
      subItems: [
        {
          subItemId: 0,
          subItemTitle: 'Knee Replacement Suregery',
          subItemLink: '/kneeReplacement',
        },
        {
          subItemId: 1,
          subItemTitle: 'ACL Reconstruction',
          subItemLink: '/aclReconstruction',
        },
      ],
    },
    {
      menuItemId: 3,
      menuItemTitle: 'FAQ',
      subItems: [],
    },
    {
      menuItemId: 4,
      menuItemTitle: 'Book an Appointment',
      subItems: [],
    },
    {
      menuItemId: 5,
      menuItemTitle: 'Contact Us',
      subItems: [],
    },
  ];
  
const initialState = {
  menu: menuItems,
  submenu: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case MENU:
      return {
        ...state,
        menu: action.payload,
      };
    case CURRENT_SUBMENU:
      return {
        ...state,
        submenu: action.payload,
      };
    default:
      return state;
  }
}

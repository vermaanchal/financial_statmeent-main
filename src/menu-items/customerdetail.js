import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const icons = {
    AccountCircleIcon
};

const customerdetail = {
  id: 'customer',
  type: 'group',
  children: [
    {
      id: 'customer',
      title: 'Financial Statements',
      type: 'item',
      url: '/',
      icon: icons.AccountCircleIcon,
    }
  ]
};

export default customerdetail;

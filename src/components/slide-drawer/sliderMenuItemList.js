import HomeIcon from '@material-ui/icons/Home';
import FaceIcon from '@material-ui/icons/Face';
import PeopleIcon from '@material-ui/icons/People';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import SchoolIcon from '@material-ui/icons/School';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import PageviewIcon from '@material-ui/icons/Pageview';

const slideMenuItemList = [
    
    {
        name: 'Home',
        itemIcon: HomeIcon,
        
    },
    {
        name: 'Students',
        itemIcon: FaceIcon,
        subDivisions:['All students','student details', 'admission form', 'student promotion']
    },
    {
        name: 'Teachers',
        itemIcon: PeopleIcon,
        subDivisions:['All teachers','student details', 'add teacher', 'payment']
    },
    {
        name: 'parents',
        itemIcon: PeopleOutlineIcon,
        subDivisions:['All parents','parents details', 'add parents']
    },
    {
        name: 'Library',
        itemIcon: LocalLibraryIcon,
        subDivisions:['All book', 'add new book']

    },
    {
        name: 'class',
        itemIcon: SchoolIcon,
        subDivisions:['All class', 'add new class']

    },
    {
        name: 'Exam',
        itemIcon: PageviewIcon,
        subDivisions:['Exam schedule', 'Exam grades']

    },
    {
        name: 'Account',
        itemIcon: AccountBalanceWalletIcon,
        subDivisions:['All fees collection','expenses', 'add expenses']

    },
    {
        name: 'Home',
        itemIcon: HomeIcon
    },
    {
        name: 'Home',
        itemIcon: HomeIcon
    },
    {
        name: 'Home',
        itemIcon: HomeIcon
    },
    {
        name: 'Home',
        itemIcon: HomeIcon
    },
    {
        name: 'Home',
        itemIcon: HomeIcon
    },

]
export default slideMenuItemList;
// useNavigation.js
import { useNavigate } from 'react-router-dom';

export const useNavigation = () => {
    const navigate = useNavigate();

    const handleNavigationToAbout = (text) => {
        switch (text) {
            case 'Login':
                navigate('/');
                break;
            case 'Package':
                navigate('/Package');
                break;
            case 'Pattern':
                navigate('/Pattern');
                break;
            case 'Idea':
                navigate('/Idea');
                break;
            case 'Fabric':
                navigate('/Fabric');
                break;
            case 'Editing':
                navigate('/Editing');
                break;
            case 'User':
                navigate('/User');
                break;
            default:
                break;
        }
    };

    return handleNavigationToAbout;
};

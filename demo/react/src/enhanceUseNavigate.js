import { useNavigate, useParams } from "react-router-dom";

export default function enhanceUseNavigate(Component){
    return function(props){
        let navigate = useNavigate()
        let parmas = useParams()
        let router = { navigate, parmas}
        return <Component {...props} router={router} />
    }
}
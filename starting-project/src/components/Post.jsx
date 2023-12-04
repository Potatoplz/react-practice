import { Link } from 'react-router-dom';
import classes from './Post.module.css';

// export function Post() {}
//const names = ['North', 'South']
//function Post({author, body}) {
function Post(propsData) {
    //const chosenName = Math.random() > 0.5 ? names[0] : names[1];

    return (
    <li className={classes.post}>
        <Link to={propsData.postId}>
            <p className={classes.author}>{propsData.author}</p>
            <p className={classes.text}>{propsData.body}</p>
        </Link>
    </li>
    );
}

export default Post;
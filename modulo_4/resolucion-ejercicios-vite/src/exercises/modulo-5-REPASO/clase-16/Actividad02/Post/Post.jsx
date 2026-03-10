import { useState } from 'react';
import style from './Post.module.css';
import { FaRegThumbsUp, FaCommentDots, FaShareAlt  } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

const Post = () => {
	const [likes, setLikes] = useState(0);
	return (
		<article className={style.containerPost}>
			<img
				src="https://wallpapers.com/images/hd/4k-ultra-hd-landscape-wallpaper-ol7dbxletepq3nc9.jpg"
				alt="Imagen Paisaje"
				className={style.postImage}
			/>
            <div className={`${style.badge} ${likes > 10 ? style.active : ''}`}>
                <p>Este post es popular!... </p>
            </div>
			<div className={style.containerButtons}>
				<button
					className={`${style.button} ${likes > 10 ? style.popular : ''}`}
					onClick={() => setLikes(likes + 1)}
				>
					<FaRegThumbsUp className={style.icon} />
					{`(${likes}) `}
					Me gusta
				</button>
				<hr className={style.divider} />
				<button className={style.button}>
					<FaCommentDots className={style.icon} />
					Comentar
				</button>
				<hr className={style.divider} />
				<button className={style.button}>
					<FaShareAlt className={style.icon} />
					Compartir
				</button>
			</div>
			<div className={style.containerComment}>
				<input
					className={style.inputComment}
					type="text"
					placeholder="Escribe tu comentario..."
				/>
				<span className={style.iconComment}>
					<IoSend />
				</span>
			</div>
		</article>
	);
};

export default Post;

import { AppRoute } from 'const';
import {Link} from 'react-router-dom';

function NotFoundScreen () {
  return (
    <div>
      <h1>404 Страница не найдена</h1>
      <Link to={AppRoute.MainScreen}>Вернуться на главную</Link>
    </div>
  )
}

export default NotFoundScreen;

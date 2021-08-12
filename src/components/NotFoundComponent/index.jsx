import './style.css';
import error404 from './error404.jpg';

export function NotFoundComponent() {
  return (
    <div className="text-center">
      <img src={error404} className="error404" alt="not-found" />
    </div>
  )
};

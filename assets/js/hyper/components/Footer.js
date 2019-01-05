import {h, app} from 'hyperapp'

export default function Footer({state, actions}) {
  return (
    <footer>
      <div class="container">
        <nav class="menu">
          <a href="#">Our Story</a>
          <a href="#">Reviews</a>
          <a href="#">Special Menu</a>
          <a href="#">Reservations</a>
          <a href="#">Contact Us</a>
        </nav>
        <ul class="social-media">
          <li><a href="#"><i class="fab fa-facebook"></i></a></li>
          <li><a href="#"><i class="fab fa-twitter-square"></i></a></li>
          <li><a href="#"><i class="fab fa-google-plus-square"></i></a></li>
          <li><a href="#"><i class="fab fa-youtube"></i></a></li>
        </ul>
        <div class="copyright">
          &copy; 2018 FakeBusinessHere
        </div>
      </div>
    </footer>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

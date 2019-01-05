import {h, app} from 'hyperapp'

export default function RandomQuote({state, actions}) {
  return (
    <section id="RandomQuote" style={{
      backgroundImage:
      'linear-gradient(135deg,rgba(0,0,0,.2) 0,#000 100%), url("https://images.pexels.com/photos/76093/pexels-photo-76093.jpeg?auto=compress&cs=tinysrgb&h=350")'
    }}>
      <div class="container">
        <h1>"The cooking profession, while it's a noble craft and a noble calling, 'cause you're doing something useful - you're feeding people, you're nurturing them, you're providing sustenance - it was never pure."</h1>
        <span class="author">-Anthony Bourdain</span>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

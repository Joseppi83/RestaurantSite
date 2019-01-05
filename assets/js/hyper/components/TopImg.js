import {h, app} from 'hyperapp'

export default function TopImg({state, actions}) {
  return (
    <section id="TopImg">
      <div class="container">
        <div class="title">
          <h5>
            Welcome
          </h5>
          <h1>
            {state.companyInfo.title1}<br />
            {state.companyInfo.title2}
          </h1>
        </div>
        <div class="contact-info">
          <div class="container">
            <div class="booking">Book Table Directly</div>
            <h2>(555) - 555 - 5555</h2>
            <div classs="hours">
            Hours of Operation <strong>Mon - Fri:</strong> 9am - 9pm
            <strong> Weekends:</strong> 9am - 11pm
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

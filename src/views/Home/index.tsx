import styled from 'styled-components'
import { useAccount } from 'wagmi'
import useTheme from 'hooks/useTheme'
import Container from 'components/Layout/Container'
import { useActiveChainId } from 'hooks/useActiveChainId'

const Home: React.FC<React.PropsWithChildren> = () => {
  return (
    <>
      <section className="promo">
        <div className="container">
          <div className="row">
            <div className="col-12 promo__content" data-aos="fade-right">
              <h1>
                Cryptoland Just Entered <span>the Real World</span>
              </h1>
              <p>
                Spend real fights effective anything extra by leading. Mouthwatering leading how real formula also
                locked-in have can mountain thought. Jumbo plus shine sale.
              </p>

              <div className="timer-wrap">
                <div id="timer" className="timer"></div>
                <div className="timer__titles">
                  <div>Days</div>
                  <div>Hours</div>
                  <div>Minutes</div>
                  <div>Seconds</div>
                </div>
              </div>

              <div className="promo__btns-wrap">
                <a href="" className="btn btn--medium btn--orange">
                  <span>Buy Tokens 47% Off</span>
                </a>
                <a href="" className="btn btn--big btn--blue">
                  WhitePappers
                </a>
              </div>
            </div>
          </div>
          <img src="images/home/promo-bg.png" data-aos="fade-up" alt="" className="promo__img" />
        </div>
      </section>
      <section className="economy">
			<div className="container">
				<div className="row">
					<div className="col-lg-8 offset-lg-4">

						<a data-jarallax-element="-40" href="https://www.youtube.com/watch?v=3cZjVFKzugY&list=PLcpkKchW7Xe5K578xRCwQbPbeVQGN5K9h&index=10" className="economy__video-btn video-btn popup-youtube">
							<img src="images/home/video-btn.png" alt="" />
						</a>

						<div className="economy__block">
							<div className="economy__block-content">
								<div className="section-header section-header--white section-header--tire section-header--small-margin">
									<h4>decentralised economy</h4>
									<h2>
										A banking platform that <span>enables developer solutions</span>
									</h2>
								</div>
								<p>
									Spend real fights effective anything extra by leading. Mouthwatering leading how real formula also locked-in have can mountain thought. Jumbo plus shine sale.
								</p>
								<ul>
									<li>
										<span>Modular structure </span> enabling easy implementation for different softwares
									</li>
									<li>
										<span>Advanced payment</span> and processing technologies, fine-tuned from more than 3 years of development testing
									</li>
									<li>
										<span>Unified AppStore</span> for retail cryptocurrency solutions with a Crypterium products audience
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<img src="images/home/video-bg.png" alt="" className="economy__bg" />
		</section>
    </>
  )
}

export default Home

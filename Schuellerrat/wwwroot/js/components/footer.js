class Footer extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `
        <footer class="footer" style="position: relative;">
				<div class="footer-widgets">
					<div class="container">
						<div class="row">
							<div class="col-md-3">
								<div class="widget widget-text">
									<img
										src="images/blog/Footer-01.jpg"
										alt="image"
									/>
									<ul>
										<li class="address">
											68 Tran Hung Dao, Binh Luc, H.Nam
										</li>
										<li class="phone">
											<a href="#">+84 962 216 601</a>
										</li>
										<li class="email">
											<a href="#"
												>contact@company.mail.com</a
											>
										</li>
									</ul>
								</div>
								<!-- /.widget -->
							</div>

							<div class="col-md-3">
								<div class="widget widget_tweets clearfix">
									<h5 class="widget-title">User Links</h5>
									<ul class="link-left">
										<li>
											<a href="#">About Us</a>
										</li>
										<li>
											<a href="#">Blog</a>
										</li>
										<li>
											<a href="#">Contact</a>
										</li>
										<li>
											<a href="#">Courses</a>
										</li>
										<li>
											<a href="#">FAQs</a>
										</li>
										<li>
											<a href="#">Events</a>
										</li>
									</ul>
									<ul class="link-right">
										<li>
											<a href="#">Become a Teacher</a>
										</li>
										<li>
											<a href="#">Maintenance</a>
										</li>
										<li>
											<a href="#">Language Packs</a>
										</li>
										<li>
											<a href="#">LearnPress</a>
										</li>
										<li>
											<a href="#">Release Status</a>
										</li>
									</ul>
								</div>
								<!-- /.widget-recent-tweets -->
							</div>
							<!-- /.col-md-2 -->

							<div class="col-md-3">
								<div class="widget widget_recent-courses">
									<h5 class="widget-title">Recent Courses</h5>
									<ul class="recent-courses-news clearfix">
										<li>
											<div class="thumb">
												<img
													src="images/blog/Footer-02.png"
													alt="image"
												/>
											</div>
											<div class="text">
												<a href="#"
													>UI-UX Designer Courses</a
												>
											</div>
											<div class="review-rating">
												<ul class="flat-reviews">
													<li class="star">
														<a href="#"
															><i
																class="fa fa-star"
															></i
														></a>
													</li>
													<li class="star">
														<a href="#"
															><i
																class="fa fa-star"
															></i
														></a>
													</li>
													<li class="star">
														<a href="#"
															><i
																class="fa fa-star"
															></i
														></a>
													</li>
													<li class="star">
														<a href="#"
															><i
																class="fa fa-star-half-o"
															></i
														></a>
													</li>
													<li class="star">
														<a href="#"
															><i
																class="fa fa-star-o"
															></i
														></a>
													</li>
												</ul>
												<p>25 Reviews</p>
											</div>
										</li>
										<li>
											<div class="thumb">
												<img
													src="images/blog/Footer-03.png"
													alt="image"
												/>
											</div>
											<div class="text">
												<a href="#"
													>PHP Shopify Courses</a
												>
											</div>
											<div class="review-rating">
												<ul class="flat-reviews">
													<li class="star">
														<a href="#"
															><i
																class="fa fa-star"
															></i
														></a>
													</li>
													<li class="star">
														<a href="#"
															><i
																class="fa fa-star"
															></i
														></a>
													</li>
													<li class="star">
														<a href="#"
															><i
																class="fa fa-star"
															></i
														></a>
													</li>
													<li class="star">
														<a href="#"
															><i
																class="fa fa-star-half-o"
															></i
														></a>
													</li>
													<li class="star">
														<a href="#"
															><i
																class="fa fa-star-o"
															></i
														></a>
													</li>
												</ul>
												<p>25 Reviews</p>
											</div>
										</li>
									</ul>
								</div>
								<!-- /.widget-quick-contact -->
							</div>
							<!-- /.col-md-4-->

							<div class="col-md-3">
								<div class="widget widget-quick-contact">
									<h5 class="widget-title">Quick Contact</h5>
									<div class="row">
										<div class="col-md-12">
											<form
												class="flat-contact-form"
												id="contactform"
												method="post"
												action="./contact/contact-process.php"
											>
												<input
													type="email"
													value=""
													tabindex="2"
													placeholder="Your Email"
													name="email"
													id="email-contact"
													required=""
												/>

												<textarea
													class="type-input"
													tabindex="3"
													placeholder="Message"
													name="message"
													id="message-contact"
													required=""
												></textarea>

												<div class="submit-wrap">
													<button
														class="flat-button bg-orange"
													>
														<i
															class="fa fa-long-arrow-right"
														></i>
													</button>
												</div>
											</form>
											<!-- /.comment-form -->
										</div>
										<!-- /.col-md-12 -->
									</div>
								</div>
								<!-- /.widget .widget-instagram -->
							</div>
						</div>
						<!-- /.row -->
					</div>
					<!-- /.container -->
				</div>
				<!-- /.footer-widgets -->

			</footer>
            <a class="go-top">
                <i class="fa fa-chevron-up"></i>
            </a>

            <!-- Bottom -->
            <div class="bottom">
                <div class="container">
                    <ul class="flat-socials-v1">
                        <li class="facebook">
                            <a href="#"><i class="fa fa-facebook"></i></a>
                        </li>
                        <li class="twitter">
                            <a href="#"><i class="fa fa-twitter"></i></a>
                        </li>
                        <li class="vimeo">
                            <a href="#"><i class="fa fa-vimeo"></i></a>
                        </li>
                        <li class="rss">
                            <a href="#"><i class="fa fa-rss"></i></a>
                        </li>
                    </ul>
                    <div class="row">
                        <div class="container-bottom">
                            <div class="copyright">
                                <p>
                                    Copyright � 2016. Designer by
                                    <span><a href="#">NthPsd</a></span>. All Rights Reserved.
                                </p>
                            </div>
                        </div>
                        <!-- /.container-bottom -->
                    </div>
                    <!-- /.row -->
                </div>
                <!-- /.container -->
            </div>
            </div>			
        `;
	}
}

customElements.define("footer-component", Footer);

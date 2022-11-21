import React, { useEffect } from "react";
import Footer from "../components/Footer";
import "../styles/faq.css";

const Faq = () => {
  useEffect(() => {
    const accordion = document.querySelectorAll(".accordion");
    const accordionBtn = document.querySelectorAll(".accordion-btn");

    accordion.forEach((element, index) => {
      element.onclick = () => {
        element.classList.toggle("open");
        if (element.classList.contains("open")) {
          accordionBtn[index].innerHTML = "&minus;";
        } else {
          accordionBtn[index].innerHTML = "&plus;";
        }
      };
    });
  });
  return (
    <main id="faq">
      <section className="faq">
        <div className="header">
          <h1 className="title">FAQs</h1>
          <p className="section-title">Account and Profile</p>
        </div>

        <div class={`accordion`}>
          <div class="accordion-header">
            <div class="accordion-text">
              <div class="accordion-btn">+</div>
              <p>I didn’t receive an activation email when I signed up</p>
            </div>
          </div>
          <div class="accordion-body">
            When you signed up, you should have received an email asking you to
            verify your account. This is to ensure we are able to send important
            account notifications to you.
            <ul>
              <li>
                Please check the inbox of the email address used to sign up
                thoroughly, including any spam/junk folders.
              </li>
              <li>
                Check that your email address is correct and update your email
                address if necessary.
              </li>
              <li>
                <a href="">Contact us </a> to request an activation email so we
                can resend it to you.
              </li>
            </ul>
          </div>
        </div>
        <div class={`accordion`}>
          <div class="accordion-header">
            <div class="accordion-text">
              <div class="accordion-btn">+</div>
              <p>Why can’t I log in?</p>
            </div>
          </div>
          <div class="accordion-body">
            If you are experiencing difficulty logging into your account, please
            ensure the following:
            <ul>
              <li>
                Ensure that the web address is typed correctly in the address
                bar of your web browser.
              </li>
              <li>Ensure that you have an internet connection.</li>
              <li>
                Ensure that you have entered your log-in details (User ID or
                email and password) correctly.
              </li>
            </ul>
            Your User ID or email address may be used to log in. All passwords
            are case sensitive - they must be typed correctly using upper and
            lower case where applicable. If you have forgotten your password,
            you can <a href=""> reset it here</a> . If you have forgotten your
            email or User ID, please <a href=""> contact us</a> .
          </div>
        </div>
        <div class={`accordion`}>
          <div class="accordion-header">
            <div class="accordion-text">
              <div class="accordion-btn">+</div>
              <p>How do I change my password?</p>
            </div>
          </div>
          <div class="accordion-body">
            If you need to change your password, you can do so in a few simple
            steps:
            <ul>
              <li>Log into your account</li>
              <li>
                Click on the down-arrow next to your portrait at the top of the
                screen to open the dropdown menu
              </li>
              <li>Click the “Settings” link</li>
              <li>Next to the word "Password”, click on the pencil icon</li>
              <li>
                Enter your current password and create a new one that meets the
                format criteria specified
              </li>
              <li>Click "Save"</li>
            </ul>
          </div>
        </div>
        <div class={`accordion`}>
          <div class="accordion-header">
            <div class="accordion-text">
              <div class="accordion-btn">+</div>
              <p>
                How do I change my profile information, e. g. email, location,
                description etc?
              </p>
            </div>
          </div>
          <div class="accordion-body">
            If you need to change your profile information:
            <ul>
              <li>Log into your account</li>
              <li>
                Click on the down-arrow next to your portrait at the top of the
                screen to open the dropdown menu
              </li>
              <li>Click the “Settings” link</li>
              <li>Next to the word "Profile”, click on the pencil icon</li>
              <li>Make any changes you may wish to make</li>
              <li>Click "Save"</li>
            </ul>
            <p>
              Please note that certain information are not amendable by the
              user, e g. names, date of birth, username. To change these, you
              will have to contact our Customer Care team.
            </p>
          </div>
        </div>
        <div class={`accordion`}>
          <div class="accordion-header">
            <div class="accordion-text">
              <div class="accordion-btn">+</div>
              <p>How do I upload or update my photos?</p>
            </div>
          </div>
          <div class="accordion-body">
            To upload or update your photos on your Christian Reals profile,
            just follow these easy steps:
            <ul>
              <li>
                From your Home Page, click the dropdown arrow at the top of the
                screen where your picture is
              </li>
              <li>Select Edit Profile</li>
              <li>Scroll to the Pictures section</li>
              <li>Click on the (x) signs to delete photos</li>
              <li>Click on the (+) signs to add new photos</li>
              <li>
                Now hit Select Photo to browse the pictures on your device, or
                drag and drop a file
              </li>
              <li>Hit save</li>
            </ul>
            <p>
              Once uploaded, your photo will be reviewed by our Customer Care
              team to make sure it meets our standards. If our team deems any of
              your photos as not meeting our standards, the photos will be
              deleted and you will be notified of the next actions to take. You
              can rearrange the order you want your photos to appear on your
              profile. The first photo in your order will be your main profile
              photo.
            </p>
          </div>
        </div>
        <div class={`accordion`}>
          <div class="accordion-header">
            <div class="accordion-text">
              <div class="accordion-btn">+</div>
              <p>What are Christian Reals’ standards for Photo Uploads?</p>
            </div>
          </div>
          <div class="accordion-body">
            Your pictures must:
            <ul>
              <li>Be real images of you</li>
              <li>Contain no nudity</li>
              <li>Not include any picture of children</li>
              <li>
                Not include picture of another adult without their consent
              </li>
              <li>
                We recommend that you upload photos of yourself only. Our
                members find it frustrating when their matches’ photos contain
                other people and it’s difficult to tell who their match is.
              </li>
            </ul>
          </div>
        </div>
        <div class={`accordion`}>
          <div class="accordion-header">
            <div class="accordion-text">
              <div class="accordion-btn">+</div>
              <p>Why is my photo not showing on my profile?</p>
            </div>
          </div>
          <div class="accordion-body">
            <p>
              All newly uploaded photos must be checked and approved by our
              support staff before they become publicly visible. Photos are
              usually checked within 24 hours of upload, but this may take
              longer at times of high demand, and on weekends when we have fewer
              staff on duty.
            </p>
          </div>
        </div>
        <div class={`accordion`}>
          <div class="accordion-header">
            <div class="accordion-text">
              <div class="accordion-btn">+</div>
              <p>Why was my photo rejected?</p>
            </div>
          </div>
          <div class="accordion-body">
            To keep our community safe and welcoming for everyone, we review all
            photos before they appear on the site. Here are some reasons why we
            may reject your photo:
            <ul>
              <li>It’s blurred or you are not visible</li>
              <li>It contains nudity</li>
              <li>It’s provocative or pornographic </li>
              <li>It contains a child alone or children by themselves </li>
              <li>It’s of a pet, an object or scenery</li>
              <li>
                It contains personal information or details that could identify
                someone (e.g. names, addresses, phone numbers, social media
                handles)
              </li>
              <li>
                It has been altered in a way that significantly changes your
                appearance
              </li>
              <li>It shows an illegal act or activity </li>
              <li>
                It contains vulgar symbols, gestures, or gang signs/colors
              </li>
            </ul>
            <p>
              We reserve the right to reject photos for any reason other than
              those specified above.
            </p>
          </div>
        </div>
        <div class={`accordion`}>
          <div class="accordion-header">
            <div class="accordion-text">
              <div class="accordion-btn">+</div>
              <p>Should I close my account or should I delete it?</p>
            </div>
          </div>
          <div class="accordion-body">
            <p>
              You can close your account if you want to take a break from
              Christian Reals and return at a later date. When you close your
              account, it is deactivated and your profile ceases to be displayed
              publicly. You can reactivate it and get back online by simply
              logging into your account. Account deletion is permanent and once
              your account has been deleted, it cannot be restored. If you wish
              to use Christian Reals after your account has been deleted, you
              will have to re-register as a new user.
            </p>
          </div>
        </div>
        <div class={`accordion`}>
          <div class="accordion-header">
            <div class="accordion-text">
              <div class="accordion-btn">+</div>
              <p>How do I close my account?</p>
            </div>
          </div>
          <div class="accordion-body">
            To close your account:
            <ul>
              <li>Log into your account</li>
              <li>
                Click on the down-arrow next to your portrait at the top of the
                screen to open the dropdown menu
              </li>
              <li>Click the “Settings” link</li>
              <li>Under the "Profile" section, click “Close My Account” </li>
              <li>Make any changes you may wish to make</li>
              <li>Confirm your decision</li>
            </ul>
            <p>
              This change takes effect immediately and your profile will become
              invisible to other members until you reactivate it. If you close
              your account before your subscription expires, there will be no
              refund of payment and your subscription is not paused. You can log
              back in before your subscription’s original expiry date and
              continue to use the subscription until that date. If your account
              remains active, automatic renewal will be applied on the
              expiration of the current subscription. Automatic renewal is not
              applied to closed accounts.
            </p>
          </div>
        </div>
        <div class={`accordion`}>
          <div class="accordion-header">
            <div class="accordion-text">
              <div class="accordion-btn">+</div>
              <p>How do I delete my account?</p>
            </div>
          </div>
          <div class="accordion-body">
            We are sorry to see you go. We hope you have found real love on
            Christian Reals. If so, please send us a testimonial and you will
            receive a £50 voucher as a “Thank You” from us.
            <p>
              To delete your account, please email our Customer Care at
              <a href="mailto:Info@christianreals.com">
                Info@christianreals.com
              </a>
            </p>
            <p>
              To send us your testimony, please email our Customer Care at
              <a href="mailto:Info@christianreals.com">
                Info@christianreals.com
              </a>
              and they will take you through the process.
            </p>
            <p>
              Please note that deleting your profile is permanent and it is not
              possible to restore your profile after it has been deleted. If you
              delete your account before your subscription expires you will lose
              any unused payment without a refund.
            </p>
          </div>
        </div>
        <div class={`accordion`}>
          <div class="accordion-header">
            <div class="accordion-text">
              <div class="accordion-btn">+</div>
              <p>
                What is the benefit of the “Verified” status and how do I get
                verified?
              </p>
            </div>
          </div>
          <div class="accordion-body">
            <p>
              Online dating websites are awash with fake profiles. At Christian
              Reals, safety is at the heart of everything we do and we take fake
              profiles seriously. Verifying users’ identities is one of the ways
              that we ensure the safety of our members. When you upload a photo
              ID and a proof of address to get verified, you will have the
              “Verified” symbol added to your profile. By verifying your
              identity, you prove your credibility and get more attention! Your
              documents will be reviewed by our Admin but will never be
              displayed publicly.
            </p>
            To get Verified:
            <ul>
              <li>Log into your account</li>
              <li>
                Click on the down-arrow next to your portrait at the top of the
                screen to open the dropdown menu
              </li>
              <li>Click the “Settings” link</li>
              <li>Under the "Profile" section, click “Verify”</li>
              <li>Click upload documents</li>
              <li>
                Now hit Select from Device to browse the documents on your
                device, or drag and drop a file
              </li>
              <li>Hit Save</li>
            </ul>
            <p>
              Our Admin will review your documents. If your documents are
              accepted, you will see the Thumbs Up sign next to your profile
              within 48 hours. If there is a problem with any of your documents,
              our Admin will be in touch. We’ll only keep your documents for as
              long as we are legally required or allowed to do so and we will
              use them exclusively for the purpose of your profile verification
              and not for any other purpose.
            </p>
          </div>
        </div>
        <div class={`accordion`}>
          <div class="accordion-header">
            <div class="accordion-text">
              <div class="accordion-btn">+</div>
              <p>Can I change my age on Christian Reals?</p>
            </div>
          </div>
          <div class="accordion-body">
            <p>
              There are certain information that cannot be changed by the user,
              e g. names, date of birth, username. To change these, you will
              have to contact our Customer Care team.
            </p>
            <p>
              If you have registered using an incorrect date of birth, you’ll
              need our help to change it. Just contact our Customer Care team
              via the <a href="/help">Contact Us</a> form, alternatively you can
              send an email to
              <a href="mailto:Info@christianreals.com">
                Info@christianreals.com
              </a>
              , making sure to include your correct date of birth in your
              message. Please use the following format: MM/DD/YYYY.
            </p>
          </div>
        </div>
        <div className="header">
          <p className="section-title">Membership, Subscription and Payment</p>
        </div>
        <div class={`accordion`}>
          <div class="accordion-header">
            <div class="accordion-text">
              <div class="accordion-btn">+</div>
              <p>Is Christian Reals free to use?</p>
            </div>
          </div>
          <div class="accordion-body">
            <p>
              There is free access to parts of the website, but access to
              certain features is subject to subscription charges.
            </p>
          </div>
        </div>
        <div class={`accordion`}>
          <div class="accordion-header">
            <div class="accordion-text">
              <div class="accordion-btn">+</div>
              <p>
                Why do I need to buy a subscription on your Christian dating
                website?
              </p>
            </div>
          </div>
          <div class="accordion-body">
            <p>
              The quality and integrity of our members’ experience is very
              important to us, which is why we have decided to withhold certain
              features from Basic members. We want all our members to be equally
              engaged and invested in Christian Reals and we want to attract
              only people who are serious about finding real meaningful long
              term relationship. Our Trial and Basic memberships are for new
              users to get to know the service and decide whether they’re ready
              to invest and commit towards finding a real relationship.
            </p>
          </div>
        </div>
        <div class={`accordion`}>
          <div class="accordion-header">
            <div class="accordion-text">
              <div class="accordion-btn">+</div>
              <p>What is the difference between membership and subscription?</p>
            </div>
          </div>
          <div class="accordion-body">
            <p>
              Everyone who sets up a profile is a member. Whilst parts of the
              website and some features are free for all members, only
              subscription members can enjoy the full suite of features and
              services for a fee.
            </p>
          </div>
        </div>
        <div class={`accordion`}>
          <div class="accordion-header">
            <div class="accordion-text">
              <div class="accordion-btn">+</div>
              <p>
                What are the different membership types available on Christian
                Reals?
              </p>
            </div>
          </div>
          <div class="accordion-body">
            <p>
              Active accounts are categorised as either Trial, Basic or Premium
              members. Premium members pay subscription fees, which gives full
              access to the site. We may limit services to non-paying members,
              which are subject to change at any time. You can view and compare
              our membership types here.
            </p>
          </div>
        </div>
        <div class={`accordion`}>
          <div class="accordion-header">
            <div class="accordion-text">
              <div class="accordion-btn">+</div>
              <p>
                What are the subscription options available on Christian Reals?
              </p>
            </div>
          </div>
          <div class="accordion-body">
            We offer a range of attractive and competitive subscription plans.
            The following subscription plans are available:
            <ul>
              <li>1-month plan</li>
              <li>3-month plan</li>
              <li>6-month plan</li>
              <li>12 month-plan</li>
            </ul>
            <p>
              The longer the plan the cheaper the cost to the member in terms of
              equivalent monthly cost. Please visit our subscription page for
              details.
            </p>
          </div>
        </div>
        <div class={`accordion`}>
          <div class="accordion-header">
            <div class="accordion-text">
              <div class="accordion-btn">+</div>
              <p>How do I buy a subscription?</p>
            </div>
          </div>
          <div class="accordion-body">
            <p>
              If you are a Trial or Basic member, you will need to become a
              Premium member in order to buy a subscription and enjoy unlimited
              access to our services. Just log in to your account, click the
              “Upgrade Now” button and select the subscription that best suits
              you
            </p>
          </div>
        </div>
        <div class={`accordion`}>
          <div class="accordion-header">
            <div class="accordion-text">
              <div class="accordion-btn">+</div>
              <p>My subscription is about to expire. How do I renew?</p>
            </div>
          </div>
          <div class="accordion-body">
            <p>
              For your convenience, we will automatically renew your
              subscription just before your current term comes to an end,
              meaning we will take another payment just before your subscription
              is about to expire. Automatic renewal is applied unless member
              cancels at least 30 days (14 days for 1-month plans) before the
              expiry of the current subscription. This ensures your subscription
              continues successfully without any gaps.
            </p>
          </div>
        </div>
        <div class={`accordion`}>
          <div class="accordion-header">
            <div class="accordion-text">
              <div class="accordion-btn">+</div>
              <p>How do I cancel my subscription?</p>
            </div>
          </div>
          <div class="accordion-body">
            <p>
              You can cancel at any time and it's hassle-free to cancel. You can
              cancel easily via your profile page. If you decide to cancel, you
              will receive no refund of payment but you will still have full
              access for the duration you have paid for.
            </p>
          </div>
        </div>
        <div class={`accordion`}>
          <div class="accordion-header">
            <div class="accordion-text">
              <div class="accordion-btn">+</div>
              <p>I am a Trial Member. How do I upgrade my account?</p>
            </div>
          </div>
          <div class="accordion-body">
            <p>
              You can upgrade easily via your profile page by clicking the
              “Upgrade” button and following the prompts.
            </p>
          </div>
        </div>
        <div class={`accordion`}>
          <div class="accordion-header">
            <div class="accordion-text">
              <div class="accordion-btn">+</div>
              <p>
                I have not used all of my subscription and want to close my
                account. Will I be refunded the balance?
              </p>
            </div>
          </div>
          <div class="accordion-body">
            <p>
              No, unused portions of a subscription are generally not
              refundable. Closing your account may result in your unused
              subscription being lost..
            </p>
          </div>
        </div>
        <div class={`accordion`}>
          <div class="accordion-header">
            <div class="accordion-text">
              <div class="accordion-btn">+</div>
              <p>
                I have not used all of my subscription and want to delete my
                profile. Will I be refunded the balance?
              </p>
            </div>
          </div>
          <div class="accordion-body">
            <p>
              No, unused portions of a subscription are generally not
              refundable. Deleting your profile will result in your unused
              subscription being lost.
            </p>
          </div>
        </div>
        <div class={`accordion`}>
          <div class="accordion-header">
            <div class="accordion-text">
              <div class="accordion-btn">+</div>
              <p>How do I check my subscription status?</p>
            </div>
          </div>
          <div class="accordion-body">
            You can review the details of your subscription by logging into your
            account from where you can review:
            <ul>
              <li>Membership term length</li>
              <li>Expiry and auto-renewal dates</li>
              <li>Date of purchase</li>
            </ul>
            To review your subscription, follow these simple steps:
            <ul>
              <li>Log into your account</li>
              <li>
                Click on the down-arrow next to your portrait at the top of the
                screen to open the dropdown menu
              </li>
              <li>Click the “Settings” link</li>
              <li>Click “My Membership”</li>
            </ul>
            <p>
              You can also cancel your membership (turn off the auto-renewal
              feature) on this page.
            </p>
          </div>
        </div>
        <div class={`accordion`}>
          <div class="accordion-header">
            <div class="accordion-text">
              <div class="accordion-btn">+</div>
              <p>What methods of payment does Christian Reals accept?</p>
            </div>
          </div>
          <div class="accordion-body">
            <p>
              We offer a secure payment facility which includes Visa, Mastercard
              and American Express. We accept both debit and credit cards.
              Alternatively, you can pay via PayPal. Full more details, please
              visit our <a href="/subcsription">subscription</a> page.
            </p>
          </div>
        </div>
        <div class={`accordion`}>
          <div class="accordion-header">
            <div class="accordion-text">
              <div class="accordion-btn">+</div>
              <p>Is it safe to enter my bank card details on the site?</p>
            </div>
          </div>
          <div class="accordion-body">
            <p>
              Absolutely. Card payments are processed using our PayPal and
              Stripe card-processing gateways. These are two of the largest and
              most trusted global payment processing companies. All your card
              details are encrypted for maximum security whilst travelling over
              the Internet. You may be asked for an additional level of
              authentication called MasterCard SecureCode or Verified by Visa
              depending on your card type. These systems have been put in place
              by the card networks and the banks in order to provide an extra
              layer of security against fraud.
            </p>
          </div>
        </div>
        <div class={`accordion`}>
          <div class="accordion-header">
            <div class="accordion-text">
              <div class="accordion-btn">+</div>
              <p>
                How will my payments to Christian Reals appear on my credit card
                or bank statement?
              </p>
            </div>
          </div>
          <div class="accordion-body">
            <p>
              Payments will be shown as a purchase from "Xxxxxxxxx Xxxxxxxxxx".
            </p>
          </div>
        </div>
        <div class={`accordion`}>
          <div class="accordion-header">
            <div class="accordion-text">
              <div class="accordion-btn">+</div>
              <p>
                Why does my payment to Christian Reals appear on my credit card
                statement as purchase from Xxxxxxxxx Xxxxxxxx?
              </p>
            </div>
          </div>
          <div class="accordion-body">
            <p>
              Christian Reals is owned and operated by Xxxxxxxxx Xxxxxxxxxx.
            </p>
          </div>
        </div>
        <div class={`accordion`}>
          <div class="accordion-header">
            <div class="accordion-text">
              <div class="accordion-btn">+</div>
              <p>I have a specific payment query</p>
            </div>
          </div>
          <div class="accordion-body">
            <p>
              Please send us your query directly by emailing
              <a href="mailto:info@christianreals.com">
                info@christianreals.com
              </a>
              For your security, please do not email us your full card number,
              CVV or full password. We will never ask you for this information
              via email.
            </p>
          </div>
        </div>
        <div className="header">
          <p className="section-title">Site use</p>
        </div>
        <div class={`accordion`}>
          <div class="accordion-header">
            <div class="accordion-text">
              <div class="accordion-btn">+</div>
              <p>How do I contact another member?</p>
            </div>
          </div>
          <div class="accordion-body">
            <p>
              On their profile page, you can start a chat message or send a
              wink, a smile or a like. click on any of these icons displayed
              next to their profile photo to start communicating.
            </p>
          </div>
        </div>
        <div class={`accordion`}>
          <div class="accordion-header">
            <div class="accordion-text">
              <div class="accordion-btn">+</div>
              <p>Why can’t I send messages?</p>
            </div>
          </div>
          <div class="accordion-body">
            <p>
              Only Premium members can send unlimited messages. On first sign
              up, you will become a Trial member. For three days only, and for
              absolutely free, you will have access to almost all features
              available to the Premium Member but can only send up to five
              messages per day during this period. After three days, you must
              upgrade to Premium membership and choose a subscription plan,
              otherwise your profile will convert to Basic member and access to
              features such as messaging will be limited or withdrawn.
            </p>
          </div>
        </div>
        <div class={`accordion`}>
          <div class="accordion-header">
            <div class="accordion-text">
              <div class="accordion-btn">+</div>
              <p>Must I be a subscription member to receive messages?</p>
            </div>
          </div>
          <div class="accordion-body">
            <p>
              No, you will receive messages even if you are not a subscriber.
              However, if you are a Basic member, you can only view a snippet of
              your received messages. You will not be able to view or read the
              full message and you will not be able to reply to the message or
              to message any member.
            </p>
          </div>
        </div>
        <div class={`accordion`}>
          <div class="accordion-header">
            <div class="accordion-text">
              <div class="accordion-btn">+</div>
              <p>What is video date?</p>
            </div>
          </div>
          <div class="accordion-body">
            <p>
              Ever wanted to go on a date without the expense, travelling and
              general inconvenience of meeting in real life? Well, Video Date is
              here to help! Meet your matches face-to-face on screen without
              leaving home or exchanging private contact information. It’s easy,
              fun and, above all, safe.
            </p>
          </div>
        </div>
        <div class={`accordion`}>
          <div class="accordion-header">
            <div class="accordion-text">
              <div class="accordion-btn">+</div>
              <p>How do I start a video date?</p>
            </div>
          </div>
          <div class="accordion-body">
            <p>
              The feature can be activated in the messaging area or directly in
              a contact’s profile by clicking the “Video Date” button. To use
              the Video Date function, both members must be online and Christian
              Reals must be the active browser tab. The first time you begin or
              accept a Video Date, your device will ask for your permission to
              grant Christian Reals access to your microphone and camera. To
              proceed, just click the “Allow” button. Before arranging a Video
              Date, you and your match need to have sent and received at least
              five messages each – so ten in total. This prevents random calls
              from matches you haven’t spoken to or haven’t built a connection
              with yet.
            </p>
          </div>
        </div>
        <div class={`accordion`}>
          <div class="accordion-header">
            <div class="accordion-text">
              <div class="accordion-btn">+</div>
              <p>
                How can I tell if someone I have messaged has read my message?
              </p>
            </div>
          </div>
          <div class="accordion-body">
            <p>
              You can see whether your match has read your message in the
              Messages section, where Ticks are used to indicate the message
              status. If you see one green Tick beside the message, your match
              has received it. If you can see two green Ticks, your match has
              read the message.
            </p>
          </div>
        </div>
        <div class={`accordion`}>
          <div class="accordion-header">
            <div class="accordion-text">
              <div class="accordion-btn">+</div>
              <p>Why am I not getting enough interests on Christian Reals?</p>
            </div>
          </div>
          <div class="accordion-body">
            <p>
              If you think you are not getting enough interests, consider making
              the first contact. You can browse our database of profiles and you
              can wink, smile, like or message anyone you feel could be a
              potential match.
            </p>
          </div>
        </div>
        <div class={`accordion`}>
          <div class="accordion-header">
            <div class="accordion-text">
              <div class="accordion-btn">+</div>
              <p>What is a match?</p>
            </div>
          </div>
          <div class="accordion-body">
            <p>
              Matches are other members whose profiles meet the criteria you
              specified in your “Matchmaking preferences” page when you click on
              the dropdown icon at the top right-hand corner of your profile
              page. Our matching engine performs two-way matches, so members
              will only appear in your match list if your profile also meets the
              criteria they specified for their matches.
            </p>
          </div>
        </div>
        <div class={`accordion`}>
          <div class="accordion-header">
            <div class="accordion-text">
              <div class="accordion-btn">+</div>
              <p>Why am I not getting enough matches on Christian Reals?</p>
            </div>
          </div>
          <div class="accordion-body">
            If you think you’re not getting enough matches, try adjusting your
            preferences.
            <ul>
              <li>Log into your account</li>
              <li>Click on the Matches tab at the top</li>
              <li>
                Scroll down to the bottom of the list, where you’ll see your
                Match Preferences
              </li>
              <li>Select Change Search Criteria </li>
              <li>
                Think about expanding factors like age, height, location, etc to
                get more matches
              </li>
              <li>Once you’re happy with your changes, hit Find Matches </li>
            </ul>
          </div>
        </div>
        <div class={`accordion`}>
          <div class="accordion-header">
            <div class="accordion-text">
              <div class="accordion-btn">+</div>
              <p>How do I add someone as a favourite?</p>
            </div>
          </div>
          <div class="accordion-body">
            <p>
              Simply select the “More” tab next to their profile photo and click
              on the “Flag” symbol to add them to your favourites list.
            </p>
          </div>
        </div>
        <div class={`accordion`}>
          <div class="accordion-header">
            <div class="accordion-text">
              <div class="accordion-btn">+</div>
              <p>What is Love Game on Christian Reals?</p>
            </div>
          </div>
          <div class="accordion-body">
            <p>
              Love Game is one of several communication options available to our
              members. It is just a fun way of potential matches getting to know
              each other. When you decide to play a love game, click on a user’s
              profile, click on the Hearts Card to complete a series of
              interactive questions to send to your match. You will be presented
              with 5 pairs of photos or 5 set of questions. Choose your
              favourite answers for each one. Once you're done, your match will
              receive these and can then do the same. Your match will not see
              your choices until they have completed and sent you their own
              choices. Once you've both made your choices, you can compare and
              see the areas that you have common interests, likes or tastes and
              the areas that you have answered differently.
            </p>
          </div>
        </div>
        <div class={`accordion`}>
          <div class="accordion-header">
            <div class="accordion-text">
              <div class="accordion-btn">+</div>
              <p>
                How can I know/see when my match was last online on Christian
                Reals?
              </p>
            </div>
          </div>
          <div class="accordion-body">
            <p>
              You can see when your matches were last on Christian Reals just
              below their profile picture. You can tell if a match is currently
              online by a small, green dot next to their picture. The Online
              Right Now feature lets you see which of your matches are most
              likely to respond straight away to your messages.
            </p>
          </div>
        </div>
        <div className="header">
          <p className="section-title">Safety</p>
        </div>
        <div class={`accordion`}>
          <div class="accordion-header">
            <div class="accordion-text">
              <div class="accordion-btn">+</div>
              <p>Is Christian Reals safe to use?</p>
            </div>
          </div>
          <div class="accordion-body">
            <p>
              Christian Reals is safe to use. We employ all measures within our
              reach to ensure that you enjoy utmost safety whilst using our
              website or other services. However, like all online dating, there
              are risks! Please read our <a href="">Safety Advice</a> where we
              have provided some safety tips to help ensure your experience with
              online dating is as safe and enjoyable as possible. Whilst we will
              operate the website with the reasonable skill and care of an
              online service provider, it is ultimately your responsibility to
              take actions for your own personal safety.
            </p>
          </div>
        </div>
        <div class={`accordion`}>
          <div class="accordion-header">
            <div class="accordion-text">
              <div class="accordion-btn">+</div>
              <p>
                How do I change my profile information, e. g. email, location,
                description etc?
              </p>
            </div>
          </div>
          <div class="accordion-body">
            If you need to change your profile information:
            <ul>
              <li>Log into your account</li>
              <li>
                Click on the down-arrow next to your portrait at the top of the
                screen to open the dropdown menu
              </li>
              <li>Click the “Settings” link</li>
              <li>Next to the word "Profile”, click on the pencil icon</li>
              <li>Make any changes you may wish to make</li>
              <li>Click "Save"</li>
            </ul>
            <p>
              Please note that certain information are not amendable by the
              user, e g. names, date of birth, username. To change these, you
              will have to contact our Customer Care team.
            </p>
          </div>
        </div>
        <div class={`accordion`}>
          <div class="accordion-header">
            <div class="accordion-text">
              <div class="accordion-btn">+</div>
              <p>
                How do I change my profile information, e. g. email, location,
                description etc?
              </p>
            </div>
          </div>
          <div class="accordion-body">
            If you need to change your profile information:
            <ul>
              <li>Log into your account</li>
              <li>
                Click on the down-arrow next to your portrait at the top of the
                screen to open the dropdown menu
              </li>
              <li>Click the “Settings” link</li>
              <li>Next to the word "Profile”, click on the pencil icon</li>
              <li>Make any changes you may wish to make</li>
              <li>Click "Save"</li>
            </ul>
            <p>
              Please note that certain information are not amendable by the
              user, e g. names, date of birth, username. To change these, you
              will have to contact our Customer Care team.
            </p>
          </div>
        </div>
        <div class={`accordion`}>
          <div class="accordion-header">
            <div class="accordion-text">
              <div class="accordion-btn">+</div>
              <p>
                How do I change my profile information, e. g. email, location,
                description etc?
              </p>
            </div>
          </div>
          <div class="accordion-body">
            If you need to change your profile information:
            <ul>
              <li>Log into your account</li>
              <li>
                Click on the down-arrow next to your portrait at the top of the
                screen to open the dropdown menu
              </li>
              <li>Click the “Settings” link</li>
              <li>Next to the word "Profile”, click on the pencil icon</li>
              <li>Make any changes you may wish to make</li>
              <li>Click "Save"</li>
            </ul>
            <p>
              Please note that certain information are not amendable by the
              user, e g. names, date of birth, username. To change these, you
              will have to contact our Customer Care team.
            </p>
          </div>
        </div>
        <div class={`accordion`}>
          <div class="accordion-header">
            <div class="accordion-text">
              <div class="accordion-btn">+</div>
              <p>
                How do I change my profile information, e. g. email, location,
                description etc?
              </p>
            </div>
          </div>
          <div class="accordion-body">
            If you need to change your profile information:
            <ul>
              <li>Log into your account</li>
              <li>
                Click on the down-arrow next to your portrait at the top of the
                screen to open the dropdown menu
              </li>
              <li>Click the “Settings” link</li>
              <li>Next to the word "Profile”, click on the pencil icon</li>
              <li>Make any changes you may wish to make</li>
              <li>Click "Save"</li>
            </ul>
            <p>
              Please note that certain information are not amendable by the
              user, e g. names, date of birth, username. To change these, you
              will have to contact our Customer Care team.
            </p>
          </div>
        </div>
        <div class={`accordion`}>
          <div class="accordion-header">
            <div class="accordion-text">
              <div class="accordion-btn">+</div>
              <p>
                How do I change my profile information, e. g. email, location,
                description etc?
              </p>
            </div>
          </div>
          <div class="accordion-body">
            If you need to change your profile information:
            <ul>
              <li>Log into your account</li>
              <li>
                Click on the down-arrow next to your portrait at the top of the
                screen to open the dropdown menu
              </li>
              <li>Click the “Settings” link</li>
              <li>Next to the word "Profile”, click on the pencil icon</li>
              <li>Make any changes you may wish to make</li>
              <li>Click "Save"</li>
            </ul>
            <p>
              Please note that certain information are not amendable by the
              user, e g. names, date of birth, username. To change these, you
              will have to contact our Customer Care team.
            </p>
          </div>
        </div>
        <div class={`accordion`}>
          <div class="accordion-header">
            <div class="accordion-text">
              <div class="accordion-btn">+</div>
              <p>
                How do I change my profile information, e. g. email, location,
                description etc?
              </p>
            </div>
          </div>
          <div class="accordion-body">
            If you need to change your profile information:
            <ul>
              <li>Log into your account</li>
              <li>
                Click on the down-arrow next to your portrait at the top of the
                screen to open the dropdown menu
              </li>
              <li>Click the “Settings” link</li>
              <li>Next to the word "Profile”, click on the pencil icon</li>
              <li>Make any changes you may wish to make</li>
              <li>Click "Save"</li>
            </ul>
            <p>
              Please note that certain information are not amendable by the
              user, e g. names, date of birth, username. To change these, you
              will have to contact our Customer Care team.
            </p>
          </div>
        </div>
        <div class={`accordion`}>
          <div class="accordion-header">
            <div class="accordion-text">
              <div class="accordion-btn">+</div>
              <p>How do I report a profile?</p>
            </div>
          </div>
          <div class="accordion-body">
            <p>
              If you find another member’s behaviour suspicious or giving cause
              for concern, please let our Customer Care know by using the
              “Report profile” function, available when viewing the profile of
              any member. You'll be given the opportunity to explain why you are
              reporting the profile. Your valued feedback enables us to
              investigate and take necessary action. All complaints are treated
              in the strictest confidence and could result in, amongst other
              things, the suspension or deletion of the offending member's
              profile or reporting to law enforcement.
            </p>
          </div>
        </div>
        <div class={`accordion`}>
          <div class="accordion-header">
            <div class="accordion-text">
              <div class="accordion-btn">+</div>
              <p>How do I report a bad date?</p>
            </div>
          </div>
          <div class="accordion-body">
            <p>
              If you encounter a bad date that has threatened you or could
              threaten other users or members of the public, please report it
              directly to us by completing our
              <a href="/help#contact">Contact</a> form or by emailing
              <a href="mailto:info@christianreals.com">
                info@christianreals.com
              </a>
              Consider whether you need to also report to the police.
            </p>
          </div>
        </div>
        <div class={`accordion`}>
          <div class="accordion-header">
            <div class="accordion-text">
              <div class="accordion-btn">+</div>
              <p>How do I report a Meetup event or organiser?</p>
            </div>
          </div>
          <div class="accordion-body">
            <p>
              If you believe or suspect that a Meetup event falls short of our
              safety or service standards, please report it directly to us by
              completing our <a href="/help#contact">Contact</a> form or by
              emailing
              <a href="mailto:Info@christianreals.com">
                Info@christianreals.com
              </a>
            </p>
          </div>
        </div>
        <div class={`accordion`}>
          <div class="accordion-header">
            <div class="accordion-text">
              <div class="accordion-btn">+</div>
              <p>How do I stop receiving messages from a specific member?</p>
            </div>
          </div>
          <div class="accordion-body">
            <p>
              You are in control. Go to their profile, select the “More” tab
              next to the profile photo and click on the 'Block' link. If they
              try to contact you after you have blocked them, they will see a
              message saying, “Sorry, you cannot contact this user”.
            </p>
          </div>
        </div>
        <div class={`accordion`}>
          <div class="accordion-header">
            <div class="accordion-text">
              <div class="accordion-btn">+</div>
              <p>Can I block a member from contacting me?</p>
            </div>
          </div>
          <div class="accordion-body">
            <p>
              Yes. You can block other users from contacting you or sending you
              messages. This option is available under the “More” tab when you
              go to the user’s profile page. You can also unblock a user you had
              previously blocked by following the same steps.
            </p>
          </div>
        </div>
        <div class={`accordion`}>
          <div class="accordion-header">
            <div class="accordion-text">
              <div class="accordion-btn">+</div>
              <p>How do I unblock a member I had previously blocked?</p>
            </div>
          </div>
          <div class="accordion-body">
            There are two ways you can do this:
            <ul>
              <li>
                Go to their profile, select the “More” tab next to the profile
                photo and click on the 'Unblock' link.
              </li>
              <li>Go to your Blocked List</li>
            </ul>
          </div>
        </div>
        <div class={`accordion`}>
          <div class="accordion-header">
            <div class="accordion-text">
              <div class="accordion-btn">+</div>
              <p>Is my privacy protected?</p>
            </div>
          </div>
          <div class="accordion-body">
            <p>
              Yes. Your details will never be given to other members or used for
              any purpose without your permission. For full details on how we
              protect your privacy please read our
              <a href="/">Privacy Policy</a> .
            </p>
          </div>
        </div>
        <div className="header">
          <p className="section-title">General Enquiries</p>
        </div>
        <div class={`accordion`}>
          <div class="accordion-header">
            <div class="accordion-text">
              <div class="accordion-btn">+</div>
              <p>What is Christian Reals all about?</p>
            </div>
          </div>
          <div class="accordion-body">
            <p>
              Everything you need to know about us is contained in our About Us
              page. If you have specific questions that are not covered, please
              email us to
              <a href="mailto:Info@christianreals.com">
                Info@christianreals.com
              </a>
            </p>
          </div>
        </div>

        <div class={`accordion`}>
          <div class="accordion-header">
            <div class="accordion-text">
              <div class="accordion-btn">+</div>
              <p>How do I contact customer service?</p>
            </div>
          </div>
          <div class="accordion-body">
            <p>
              You can contact our Customer Care team by completing our{" "}
              <a href="/help#contact">Contact</a>
              form or by emailing
              <a href="mailto:Info@christianreals.com">
                Info@christianreals.com
              </a>
              .
            </p>
          </div>
        </div>
        <div class={`accordion`}>
          <div class="accordion-header">
            <div class="accordion-text">
              <div class="accordion-btn">+</div>
              <p>How do I stop receiving (opt out from) your emails?</p>
            </div>
          </div>
          <div class="accordion-body">
            <p>
              Check at the bottom of the emails that we sent you for the
              “Unsubscribe” option and click on the link. You can also change
              your email preferences by logging into your account and ticking or
              unticking the relevant boxes.
            </p>
          </div>
        </div>
        <div class={`accordion`}>
          <div class="accordion-header">
            <div class="accordion-text">
              <div class="accordion-btn">+</div>
              <p>Are contents censored on Christian Reals?</p>
            </div>
          </div>
          <div class="accordion-body">
            As a general rule, no. However, we reserve the right to modify, hide
            or delete unacceptable profiles. Some of the reasons why we might
            modify, hide or delete a profile are if they:
            <ul>
              <li>
                Contain contact information such as email or Skype addresses, telephone numbers, physical addresses or other personal contact information.
              </li>
              <li>
              Are illegal or do not meet our eligibility criteria, e.g. under 18 years of age or soliciting contact from people under 18 years.
              </li>
              <li>Are racist or attack other groups or religions.</li>
            </ul>
            <p>
            Please refer to our <a href="/terms and condition">Terms of Use</a>  for full details.
            </p>
          </div>
        </div>
        <div class={`accordion`}>
          <div class="accordion-header">
            <div class="accordion-text">
              <div class="accordion-btn">+</div>
              <p>Does Christian Reals have a mobile app?</p>
            </div>
          </div>
          <div class="accordion-body">
            <p>
            No. We do not have a mobile app that you can purchase, download or install. However, our website has been designed with the mobile users in mind. The mobile view (the website when accessed via a mobile device) looks and feels like a mobile app, but works without the need to download or install any app, giving the user a great experience altogether. Users can however, add the Site URL as a clickable icon on their mobile device Home Screen for easy and quick access or add it to Favourites.
            </p>
          </div>
        </div>
        <div class={`accordion`}>
          <div class="accordion-header">
            <div class="accordion-text">
              <div class="accordion-btn">+</div>
              <p>I have found love on Christian Reals, how do I send a testimonial?</p>
            </div>
          </div>
          <div class="accordion-body">
            <p>
            We are chuffed that you have found love on Christian Reals and you would like to testify of the Lord’s goodness. To send us your testimony, please email our Customer Care at <a href="mailto:Info@Christianreals.com">Info@Christianreals.com</a>  and they will take you through the process.
            </p>
          </div>
        </div>

        <p>
        Have more questions?  
        <a href="/help#contact">
             Contact us
        </a>
        </p>
      </section>
      <Footer />
    </main>
  );
};

export default Faq;

import PageContainer from "../../components/layout/PageContainer";
import "./faqs.css";


const Faq = () => {
  return (
   
    <PageContainer>
      <div className="faqcontainer">
        

      

      <h1>Frequently Asked Questions.</h1>

      <h3>We hate fake news, so here are factual and researched answers for your Covid vaccine questions.</h3>
      
      <div>
    <input type="checkbox" id="question1" name="q"  class="questions"/> 
    <div class="plus">+</div>
    <label for="question1" class="question">
    Is the COVID-19 vaccine safe given that it was rapidly developed and tested? 
    </label>
    <div class="answers">
      <p>Many pharmaceutical companies invested significant resources into quickly developing a vaccine for COVID-19 because of the world-wide impact of the pandemic. 
        The emergency situation warranted an emergency response but that does not mean that companies bypassed safety protocols or didn't perform adequate testing. </p>
       <p> While there are many COVID-19 vaccine candidates in development, early interim data are encouraging for the Pfizer vaccine which likely is to be the first authorized for emergency use by the FDA in the late December/early January timeframe. 
        This vaccine was created using a novel technology based on the molecular structure of the virus. The novel methodology to develop a COVID-19 vaccine allows it to be free from materials of animal origin and synthesized by an efficient, cell-free process without preservatives.
        This vaccine developed by Pfizer/BioNTecH has been studied in approximately 43,000 people. </p>
       <p> To receive emergency use authorization, the biopharmaceutical manufacturer must have followed at least half of the study participants for at least two months after completing the vaccination series, and the vaccine must be proven safe and effective in that population.
        In addition to the safety review by the FDA, the Advisory Committee on Immunization has convened a panel of vaccine safety experts to independently evaluate the safety data from the clinical trial.The data will get reviewed by authorised health care companies. 
        The safety of COVID-19 vaccine will continue to be closely monitored by the Centers for Disease Control and Prevention (CDC) and the FDA. </p>
    
  </div>
 </div>

  <div>
  <input type="checkbox" id="question2" name="q" class="questions"/>
  <div class="plus">+</div>
  <label for="question2" class="question">
  Is it true that the flu vaccine already helps protect me from COVID-19?
  </label>
  <div class="answers">
    <p>
    While the flu and COVID-19 share similar symptoms, they are two different illnesses caused by two different viruses.
    There is no evidence to support the claim that the flu vaccine protects against the coronavirus. </p>
    <p> Getting your flu shot is more important now than ever. If you don’t, you could get both COVID-19 and the
    flu at the same time — weakening your ability to fight either illness. Not only would this further endanger your health,
    but it could place added strain on our health care system. </p>
    
  </div>
</div>
<div>
  <input type="checkbox" id="question3" name="q" class="questions"/>
  <div class="plus">+</div>
  <label for="question3" class="question">
  Does it still make sense to get vaccinated against COVID-19 given that it has a rather high survival rate?
  </label>
  <div class="answers">
    <p>
    Circulating on social media is the claim that COVID-19's mortality rate is 1%-2% and that people should not be 
    vaccinated against a virus with a high survival rate. However, a 1% mortality rate is 10 times more lethal than the seasonal flu. 
    In addition, the mortality rate can vary widely and is influenced by age, sex and underlying health condition. </p>
<p> While some people that receive the vaccine may develop symptoms as their immune system responds, remember that this is common
 when receiving any vaccine and not considered serious or life-threatening. You cannot get COVID-19 infection from the COVID-19 vaccines; 
 they are inactivated vaccines and not live viruses. </p> 
<p> It's important to recognize that getting the vaccine is not just about survival from COVID-19. It's about preventing spread
 of the virus to others and preventing infection that can lead to long-term negative health effects. While no vaccine is 100% effective, 
 they are far better than not getting a vaccine. The benefits certainly outweigh the risks in healthy people.</p>
    
  </div>
</div>
<div>
  <input type="checkbox" id="question4" name="q" class="questions"/>
  <div class="plus">+</div>
  <label for="question4" class="question">
  Should I still get a vaccine if I already had COVID-19 and have recovered?
  </label>
  <div class="answers">
    <p>
    There is not enough information currently available to say if or for how long after infection 
    someone is protected from getting COVID-19 again. This is called natural immunity. 
    Early evidence suggests natural immunity from COVID-19 may not last very long, but more studies 
    are needed to better understand this. Health care companies recommend getting the COVID-19 vaccine, even if you’ve had COVID-19 previously.
     However, those that had COVID-19 should delay vaccination until about 90 days from diagnosis. People should not get vaccinated if in quarantine 
     after exposure or if they have COVID-19 symptoms. </p>
    
  </div>
</div>

<div>
  <input type="checkbox" id="question5" name="q" class="questions"/>
  <div class="plus">+</div>
  <label for="question5" class="question">
  Should I still wear a mask and practice social distancing after I get vaccinated for COVID-19?
  </label>
  <div class="answers">
    <p>It may take time for everyone who wants a COVID-19 vaccination to get one. 
      Also, while the vaccine may prevent you from getting sick, 
      it is unknown at this time if you can still carry and transmit the virus to others. Until more is understood about how well the vaccine works, 
      continuing with precautions such as mask-wearing and physical distancing will be important. </p>
    
  </div>
</div>
<div>
  <input type="checkbox" id="question6" name="q" class="questions"/>
  <div class="plus">+</div>
  <label for="question6" class="question">
  Can I suffer a fatal or severe allergic reaction to the vaccine? What should I do if I get one?
  </label>
  <div class="answers">
    <p>Serious problems from vaccination can happen, but they are rare. CDC has learned of reports that some people have experienced severe allergic reactions—also known as anaphylaxis—after getting a COVID-19 vaccine. As an example, an allergic reaction is considered severe when a person needs to be treated with epinephrine or EpiPen© or if they must go to the hospital.
The CDC released guidance for those who have allergic reactions: </p>

<p> "Persons who have had a severe allergic reaction to any vaccine or injectable therapy (intramuscular, intravenous or subcutaneous) should not receive the Pfizer-BioNTech vaccine at this time. 
  Vaccine providers should observe patients after vaccination to monitor for immediate adverse reactions: </p>

<p> People with a history of anaphylaxis should be observed for 30 minutes. </p>
<p> All other people should be observed for 15 minutes." </p>
​<p> If you get a COVID-19 vaccine and you think you might be having a severe allergic reaction after leaving the vaccination site, seek immediate medical care by calling 911.
 You can report side effects and reactions using either v-safe or the Vaccine Adverse Event Reporting System (VAERS.) </p>
 
     
 <p> 
       <a
        target="blank"
        rel="noreferrer"
        href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/safety/vsafe.html"
      >V-safe </a>
       is a new smartphone-based, after-vaccination health checker for people who
    receive COVID-19 vaccines. V-safe uses text messaging and web surveys from CDC to check 
    in with vaccine recipients following COVID-19 vaccination. V-safe also provides second vaccine dose reminders 
    if needed, and telephone follow up to anyone who reports medically significant (important) adverse events.</p>
    <p> <a
        target="blank"
        rel="noreferrer"
        href="https://vaers.hhs.gov/index.html"
      >Vaccine Adverse Event Reporting System (VAERS)</a>
       is the national system that collects reports from healthcare professionals, 
      vaccine manufacturers, and the public of adverse events that happen after vaccination; reports of adverse events that are unexpected, 
      appear to happen more often than expected, or have unusual patterns are followed up with specific studies. Reports to VAERS help CDC monitor 
      the safety of vaccines. If experts detect an unexpected adverse event, they quickly study it further to assess whether it is a true safety concern. 
      Experts then decide whether changes are needed in U.S. vaccine recommendations. This monitoring is critical to help ensure that the benefits continue 
      to outweigh the risks for people who receive vaccines.</p>
      <p> Healthcare providers will be required to report certain adverse events following 
        vaccination to VAERS. Healthcare providers also have to adhere to any revised safety reporting 
        requirements according to FDA’s conditions of authorized use throughout the duration of any Emergency Use Authorization; 
        these requirements would be posted on <a
        target="blank"
        rel="noreferrer"
        href="https://www.fda.gov/emergency-preparedness-and-response/mcm-legal-regulatory-and-policy-framework/emergency-use-authorization"
      >FDA’s website.</a>
         </p>
        <p> You can expect normal side effects after you are vaccinated. Refer to <a
        target="blank"
        rel="noreferrer"
        href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/expect.html"
      >What to Expect at Your Appointment to Get Vaccinated for COVID-19 
      </a> for additional information. </p>
    
  </div>
</div>

<div>
  <input type="checkbox" id="question7" name="q" class="questions"/>
  <div class="plus">+</div>
  <label for="question7" class="question">
  Do COVID-19 vaccines cause infertility or miscarriage?
  </label>
  <div class="answers">
    <p>No, COVID-19 vaccines have not been linked to infertility or miscarriage. </p>

<p> A sophisticated disinformation campaign has been circulating online, claiming that antibodies to the spike protein of COVID-19 produced 
  from these vaccines will bind to placental proteins and prevent pregnancy. This disinformation is thought to originate from internet postings 
  by a former scientist known to hold anti-vaccine views. </p>

<p> These postings are not scientifically plausible, as COVID-19 infection has not been linked to infertility. Also,
   no other viral infection or vaccination-inducing immunity by similar mechanisms has been shown to cause infertility.
    Antibodies to the spike protein have not been linked to infertility after COVID-19 infection. There is no scientific reason 
    to believe this will change after vaccination for COVID-19. </p> 

<p> While there are no formal studies, the best evidence comes from women who got sick with COVID-19 while pregnant. 
  While data clearly indicate pregnant women are at higher risk of hospitalization due to COVID-19 infection, there is no 
  evidence of increased miscarriage rates. </p> 

<p> During natural infection, the immune system generates the same antibodies to the spike protein that COVID-19 vaccines would. 
  Thus, if COVID-19 affected fertility, there already would be an increase in miscarriage rates in women infected with COVID-19. This has not happened. </p>
    
  </div>
</div>

<div>
  <input type="checkbox" id="question8" name="q" class="questions"/>
  <div class="plus">+</div>
  <label for="question8" class="question">
  Will COVID-19 vaccine alter my DNA?
  </label>
  <div class="answers">
    <p>The first COVID-19 vaccines to reach the market are likely to be messenger RNA (mRNA) vaccines. According to 
      the CDC, mRNA vaccines work by instructing cells in the body how to make a protein that triggers an immune response.
       Injecting mRNA into your body will not interact or do anything to the DNA of your cells. Human cells break down and get
        rid of the mRNA soon after they have finished using the instructions. </p>
    
  </div>
</div>

<div>
  <input type="checkbox" id="question9" name="q" class="questions"/>
  <div class="plus">+</div>
  <label for="question9" class="question">
  Is it true that COVID-19 vaccine was developed to control the general population either through microchip tracking or “nanotransducers” in our brain?
  </label>
  <div class="answers">
    <p>There is no vaccine microchip, and the vaccine will not track people or gather personal information into a database. </p>

<p> This myth started after comments made by Bill Gates from The Gates Foundation about a digital certificate of vaccine records. The technology he was referencing is not 
a microchip, has not been implemented in any manner and is not tied to the development, testing or distribution of COVID-19 vaccines. </p>
    
  </div>
</div>

<div>
  <input type="checkbox" id="question10" name="q" class="questions"/>
  <div class="plus">+</div>
  <label for="question10" class="question">
  Is it true that COVID-19 vaccine was developed using fetal tissue?
  </label>
  <div class="answers">
    <p>Neither the Pfizer/BioNTech COVID-19 vaccine 
      nor the Moderna COVID-19 vaccines contain fetal cells nor were fetal cells used the development or production of either vaccine. </p>
    
  </div>
</div>


      {/* <ol>
      <li>Is the COVID-19 vaccine safe given that it was rapidly developed and tested? </li>
      <li>Is it true that the flu vaccine already helps protect me from COVID-19?</li>
      <li>Does it still make sense to get vaccinated against COVID-19 given that it has a rather high survival rate?</li>
      <li>Should I still get a vaccine if I already had COVID-19 and have recovered?</li>
      <li>Should I still wear a mask and practice social distancing after I get vaccinated for COVID-19?</li>
      <li>Can I suffer a fatal or severe allergic reaction to the vaccine? What should I do if I get one?</li>
      <li>Do COVID-19 vaccines cause infertility or miscarriage?</li>
      <li>Will COVID-19 vaccine alter my DNA?</li>
      <li>Is it true that COVID-19 vaccine was developed to control the general population either through microchip tracking or “nanotransducers” in our brain?</li>
      <li>Is it true that COVID-19 vaccine was developed using fetal tissue?</li>
      </ol> */}

      </div>
    </PageContainer>

   

  );
};
export default Faq;



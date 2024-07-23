import React, { useState } from 'react';
import axios from 'axios';
import emailjs from 'emailjs-com';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import '../pages/bookADemo.css'; // Create this CSS file to contain the styles
import { useTranslation } from 'react-i18next';

const BookADemo = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    businessEmail: '',
    phoneNumber: '',
    contentType: [],
    postProductionTeam: '',
    agreement: false,
  });

  const [showThankYou, setShowThankYou] = useState(false);
  const [showHome, setShowHome] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked
          ? [...prevData[name], value]
          : prevData[name].filter((item) => item !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestBody = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      companyName: formData.companyName,
      phoneNumbers: [
        {
          type: 'MOBILE',
          code: 'IN',
          value: formData.phoneNumber,
          dialCode: '+91',
          primary: true,
        },
      ],
      emails: [
        {
          type: 'OFFICE',
          value: formData.businessEmail,
          primary: true,
        },
      ],
      contentType: formData.contentType,
      postProductionTeam: formData.postProductionTeam,
      subSource: 'Website',
    };

    try {
      const response = await axios.post('https://api.kylas.io/v1/leads/', requestBody, {
        headers: {
          'api-key': '01d6992f-6178-4863-a662-2325aedf2294:13687',
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200 || response.status === 201) {
        await sendEmail();
        showThankYouPage();
      } else {
        showError(t('form_submission_failed'));
      }
    } catch (error) {
      showError(t('form_submission_error'));
    }
  };

  const sendEmail = async () => {
    const emailParams = {
      to_email: formData.businessEmail,
      firstName: formData.firstName,
      lastName: formData.lastName,
      companyName: formData.companyName,
      phoneNumber: formData.phoneNumber,
      postProductionTeam: formData.postProductionTeam,
      contentType: formData.contentType.join(', '),
    };

    try {
      await emailjs.send('service_ao3ik3m', 'template_i9u1fvi', emailParams, 'Mi6XtpHk7DazQfLa3');
    } catch (error) {
      showError(t('email_error'));
    }
  };

  const showThankYouPage = () => {
    setShowThankYou(true);
    setTimeout(() => {
      navigateToHome();
    }, 10000);
  };

  const navigateToHome = () => {
    setShowThankYou(false);
    setShowHome(true);
  };

  const showError = (message) => {
    alert(message); // Simple error handling
  };

  return (
    <section className="form-section">
      <Navbar />
      <div className="form-container">
        {showThankYou ? (
          <div id="thank-you" className="thank-you-container">
            <h1>{t('thank_you')}</h1>
            <p>{t('thank_you_message1')}</p>
            <p>{t('thank_you_message2')}</p>
          </div>
        ) : showHome ? (
          <div id="home" className="home-container">
            <h1>{t('visit_us_again')}</h1>
          </div>
        ) : (
          <div id="form">
            <h2>{t('book_a_demo_title')}</h2>
            <p>{t('book_a_demo_message')}</p>
            <br />
            <form id="demoForm" onSubmit={handleSubmit}>
              <input type="text" name="firstName" placeholder={t('first_name')} value={formData.firstName} onChange={handleChange} required />
              <input type="text" name="lastName" placeholder={t('last_name')} value={formData.lastName} onChange={handleChange} required />
              <input type="text" name="companyName" placeholder={t('company_name')} value={formData.companyName} onChange={handleChange} required />
              <input type="email" name="businessEmail" placeholder={t('business_email')} value={formData.businessEmail} onChange={handleChange} required />
              <input type="tel" name="phoneNumber" placeholder={t('phone_number')} value={formData.phoneNumber} onChange={handleChange} required />

              <label>{t('content_type_label')}</label>
              <div className="checkbox-group">
                <label><input type="checkbox" name="contentType" value="YouTube Videos" checked={formData.contentType.includes('YouTube Videos')} onChange={handleChange} /> {t('content_youTubeVideos')}</label>
                <label><input type="checkbox" name="contentType" value="Animated Shows" checked={formData.contentType.includes('Animated Shows')} onChange={handleChange} /> {t('content_animatedShows')}</label>
                <label><input type="checkbox" name="contentType" value="Feature Films/Short Films" checked={formData.contentType.includes('Feature Films/Short Films')} onChange={handleChange} /> {t('content_featureFilms')}</label>
                <label><input type="checkbox" name="contentType" value="Corporate video" checked={formData.contentType.includes('Corporate video')} onChange={handleChange} /> {t('content_corporateVideo')}</label>
                <label><input type="checkbox" name="contentType" value="Documentary" checked={formData.contentType.includes('Documentary')} onChange={handleChange} /> {t('content_documentary')}</label>
                <label><input type="checkbox" name="contentType" value="Audio Books" checked={formData.contentType.includes('Audio Books')} onChange={handleChange} /> {t('content_audioBooks')}</label>
                <label><input type="checkbox" name="contentType" value="eLearning video" checked={formData.contentType.includes('eLearning video')} onChange={handleChange} /> {t('content_eLearningVideo')}</label>
                <label><input type="checkbox" name="contentType" value="Commercial Ads" checked={formData.contentType.includes('Commercial Ads')} onChange={handleChange} /> {t('content_commercialAds')}</label>
                <label><input type="checkbox" name="contentType" value="Podcasts" checked={formData.contentType.includes('Podcasts')} onChange={handleChange} /> {t('content_podcasts')}</label>
                <label><input type="checkbox" name="contentType" value="Video Games" checked={formData.contentType.includes('Video Games')} onChange={handleChange} /> {t('content_videoGames')}</label>
              </div>

              <label htmlFor="postProductionTeam">{t('post_production_team')}</label>
              <select name="postProductionTeam" id="postProductionTeam" value={formData.postProductionTeam} onChange={handleChange} required>
                <option value="solo">{t('solo')}</option>
                <option value="small-team">{t('small_team')}</option>
                <option value="medium-team">{t('medium_team')}</option>
                <option value="large-team">{t('large_team')}</option>
              </select>

              <label>
                <input type="checkbox" name="agreement" checked={formData.agreement} onChange={handleChange} required /> {t('agreement_text')}
              </label>

              <button type="submit">{t('lets_talk')}</button>
            </form>
          </div>
        )}
      </div>
      <br />
      <Footer />
    </section>
  );
};

export default BookADemo;
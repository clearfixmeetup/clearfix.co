import React from 'react';
import site from '../site.yml';

module.exports = {
    '_global_': {
        meta_description: 'The first advanced CSS meetup in Barcelona',
        topics_lets_talk: `Let's talk about`,
        topics_words: ['components', 'performance', 'architecture', 'standards', 'animation', 'SVG', 'modularization', 'versioning', 'distribution', 'testing', 'preprocessors', 'layouts', 'effects', 'methodologies', 'media queries', 'fonts'],
        logo_tagline: `is the first ever meetup event in Barcelona fully focused on advanced CSS techniques for modern UI development.`,
        event_description_1: `In these in-depth talks you'll learn from an amazing line-up of CSS wizards. All talks are deeply technical and will give you unique insights into topics like UI componentization, animations, complex layouts, SVG, preprocessors and much more.`,
        event_description_2: `The meetup is a great oportunity to meet new people and talk to the greatest front-end developers in Barcelona. And of course, networking is always better with free beer and pizza!`,
        newsletter_signup_title: 'Stay in touch!',
        newsletter_signup_subtitle: ['Subscribe to the', ' ', <span>{'newsletter'}</span>],
        newsletter_signup_email_placeholder: 'Type your email here',
        newsletter_signup_button: 'Subscribe',
        newsletter_signup_no_spam: 'Expect no more than one mail per month.',
        upcoming_event_title: 'Upcoming Event',
        upcoming_event_date: ['January', <br />, '17', <sub>th</sub>, ' 2017'],
        upcoming_event_date_full: ['Tuesday January 17th 2017'],
        upcoming_event_date_time_format: '2017-01-17T19:00',
        upcoming_event_venue_join_us: ['Join us at the ', <a href="https://www.google.es/maps/place/New+Relic/@41.3892413,2.1603585,17z/data=!3m1!4b1!4m5!3m4!1s0x12a4a28d0f29c04d:0x955a803b2aaeeed6!8m2!3d41.3892373!4d2.1625472" target="_blank">New Relic Barcelona office</a>, '.'],
        upcoming_event_venue_address: 'Carrer de Balmes, 49, 6th floor, 08007 Barcelona',
        contributing_speakers_title: 'Propose a Speaker',
        contributing_speakers_text: ['Want to give a talk or know someone that might be interested? We are constantly seeking new speakers.', <br />, <br />, <a href={site.form_speaker_proposal}>Propose a Speaker</a>],
        contributing_topics_title: 'Propose a Topic',
        contributing_topics_text: ['Would like to hear about an specific topic or need inspiration for a talk?', <br />, <br />, <a href={site.form_topics_proposal}  target="_blank" >Propose a topic</a>, <br />, <a href={site.results_topics_proposal} target="_blank" >See proposed topics</a>],
        contributing_partnerships_title: 'Become a Sponsor',
        contributing_partnerships_text: ['If your company is interested in sponsoring the Clearfix CSS meetup, reach us directly for more details.', <br />, <br />, <a href="mailto:hello@clearfix.co">Become a sponsor</a>],
        contributing_challenge_test_title: 'Propose a Challenge',
        contributing_challenge_test_text: ['Want to challenge Clearfix attendees? Propose a small but challenging CSS exercise.', <br />, <br />, <a href={site.form_challenge_proposal}>Send challenge</a>],
        'talks': [
            {
                'type': 'main',
                'title': ['Shared Language:', <br/>, ' Avoiding CSS conflicts across projects'],
                'description': 'Maintaining CSS in a company with several projects, teams, backgrounds and purposes is hard. In this talk Alex will share strategies to encourage a shared language within UX/UI teams and front-end and back-end developers using visual patterns and a solid CSS Architecture.',
                'speaker': 'Alejandro Carbajo',
                'avatar': require('../../src/images/alejandro-carbajo.jpg'),
            },
            {
                'type': 'lightning',
                'title': ['Dynamic vector image generation with Sass'],
                'description': 'Miguel and Dani from New Relic will walk us through the process of building dynamic background images in Sass. In this case study they will share an in-depth overview of their work on a real-life project. From the reasoning behind the approach taken and the crafting of the adaptative and animated vector image to the creation of a Sass toolkit for generating inline SVG backgrounds.',
                'speaker': 'Daniel Guillan & Miguel Jiménez Esún',
                'avatar': require('../../src/images/daniel-guillan-and-miguel-jimenez-esun.jpg'),
            }
        ],
        'talk_type_featured': 'Featured Talk',
        'talk_type_lightning': 'Lightning Talk',
        the_challenge_title: 'The CodePen Challenge',
        the_challenge_description: 'Bring your laptop and help us solve a quick, fun and challenging CSS code exercise! We will share and discuss the best solutions. Oh! And we\'ll have some nice prizes too!',
        rsvp_title: 'Save the date',
        rsvp_cta: 'RSVP Now',
        rsvp_extra: 'it\s free!',
        rsvp_url: 'https://www.meetup.com/Clearfix/events/235646760/',
        footer_copyright: ['Clearfix is organized by ', <a href="https://twitter.com/danielguillan" target="_blank">@danielguillan</a>, ' and ', <a href="https://twitter.com/vieron" target="_blank">@vieron</a>, '. Obviously, this site uses the ', <a href="http://nicolasgallagher.com/micro-clearfix-hack/" target="_blank">clearfix CSS hack</a>, '.'],
        link_become_a_sponsor: 'Become a sponsor',
        link_submit_talk: 'Want to give a talk?',
        link_propose_topic: 'Propose a topic',
        link_propose_speaker: 'Propose a speaker',
        link_propose_challenge: 'Send a code challenge',
        link_code_of_conduct: 'Code of conduct',
        link_meetup_calendar: 'Calendar',
    },

    '': {
        title: ''
    },

    about: {
        title: 'About'
    }
}

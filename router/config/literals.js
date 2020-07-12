var message = {}
message.START  = {
    "type": "button",
    "data": {
        "text": " Hello, I am Tara!<br>I am your DIKSHA guide<br>Please select your preference from the options I provide or type your query directly.",
        "buttons": [
            {
                "text": "Digital content",
                "value": "1"
            },
            {
                "text": "Courses",
                "value": "2"
            },
            {
                "text": "DIKSHA mobile app",
                "value": "3",
            },
            {
                "text": "Content contribution",
                "value": "4",
            },
            {
                "text": "Other DIKSHA queries",
                "value": "5",
            }
        ]
    }
}

message.CHOOSE_DIGITAL_CONTENT = {

    "type": "button",
    "data": {
        "text": " <span> What content would you like to explore?",
        "buttons": [
            {
                "text":"Textbook videos & practice questions",
                "value": 1,
            },
            {
                "text":"Critical thinking questions",
                "value": 2,
            },
            {
                "text":"Yoga quiz",
                "value": 3,
            },
            {
                "text":"First Menu",
                "value": 0,
            }
        ]
    }
}

message.CHOOSE_BOARD = 
{
    "type": "button",
    "data": {
        "text": " Tell me which board you belong to",
        "buttons": [
            {
                "text":"CBSE",
                "value": 1,
            },
            {
                "text":"State Board",
                "value": 2,
            },
            {
                "text":"Go Back",
                "value": 99,
            },
            {
                "text":"First Menu",
                "value": 0,
            }
        ]
    }
}


message.CBSE_MESSAGE =
{
    "type": "button",
    "data": {
        "text": "Please visit: <a target='_blank' href='https://diksha.gov.in/CBSE/explore'>DIKSHA CBSE</a><br>Select the Medium and Class to view relevant subject textbook on the board website.<br><br><hr><strong>** </strong>Press 99 to go back to choose another board or press 0 to go to first menu.",
        "buttons": []
    }
}

message.CHOOSE_STATE_BOARD = 
{
    "type": "button",
    "data": {
        "text": " Which state board do you belong to? ",
        "buttons": [{
            "text":"Tamilnadu",
            "value": 1,
        },
        {
            "text":"Karnataka",
            "value": 2,
        },
        {
            "text":"Gujarat",
            "value": 3,
        },
        {
            "text":"UttarPradesh",
            "value": 4,
        },
        {
            "text":"Punjab",
            "value": 5,
        },
        {
            "text":"Rajasthan",
            "value": 6,
        },
        {
            "text":"Manipur",
            "value": 7,
        },
        {
            "text":"Chhattisgarh",
            "value": 8,
        },
        {
            "text":"Maharashtra",
            "value": 9,
        },
        {
            "text":"Bihar",
            "value": 10,
        },
        {
            "text":"Odisha",
            "value": 11,
        },
        {
            "text":"Assam",
            "value": 12,
        },
        {
            "text":"Madhya Pradesh",
            "value": 13,
        },
        {
            "text":"Haryana",
            "value": 14,
        },
        {
            "text":"Nagaland",
            "value": 15,
        },
        {
            "text":"Goa",
            "value": 16,
        },
        {
            "text":"Telangana",
            "value": 17,
        },
        {
            "text":"Andhra Pradesh",
            "value": 18,
        },
        {
            "text":"Meghalaya",
            "value": 19,
        },
        {
            "text":"NCERT",
            "value": 20,
        },
        {
            "text":"Jharkhand",
            "value": 21,
        },
        {
            "text":"Sikkim",
            "value": 22,
        },
        {
            "text":"Chandigarh",
            "value": 23,
        },
        {
            "text":"Go Back",
            "value": 99,
        },
        {
            "text":"First Menu",
            "value": 0,
        }]
    }
}

message.TN_BOARD = 
{
    "type": "button",
    "data": {
        "text": " Please visit <a target='_blank' href='https://diksha.gov.in/tn/explore'>DIKSHA TAMILNADU</a><br>Select the Medium and Class to view relevant subject textbook on the board website.<br><br><hr><strong>** </strong>Press 99 to go back to choose another board or press 0 to go to first menu.",
        "buttons": []
    }
}

message.KA_BOARD =

{
    "type": "button",
    "data": {
        "text": " Please visit <a target='_blank' href='https://diksha.gov.in/ka/explore'>DIKSHA KARNATAKA</a><br>Select the Medium and Class to view relevant subject textbook on the board website.<br><br><hr><strong>** </strong>Press 99 to go back to choose another board or press 0 to go to first menu.",
        "buttons": []
    }
}

message.GJ_BOARD = 
{
    "type": "button",
    "data": {
        "text": " Please visit <a target='_blank' href='https://diksha.gov.in/gj/explore'>DIKSHA GUJARAT</a><br>Select the Medium and Class to view relevant subject textbook on the board website.<br><br><hr><strong>** </strong>Press 99 to go back to choose another board or press 0 to go to first menu.",
        "buttons": []
    }
}

message.UP_BOARD = 
{
    "text": "  Please visit <a target='_blank' href='https://diksha.gov.in/up/explore'>DIKSHA UTTARPRADESH</a><br>Select the Medium and Class to view relevant subject textbook on the board website.<br><br><hr><strong>** </strong>Press 99 to go back to choose another board or press 0 to go to first menu.",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.PB_BOARD = 
{
    "text": "  Please visit <a target='_blank' href='https://diksha.gov.in/up/explore'>DIKSHA UTTARPRADESH</a><br>Select the Medium and Class to view relevant subject textbook on the board website.<br><br><hr><strong>** </strong>Press 99 to go back to choose another board or press 0 to go to first menu.",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.RJ_BOARD = 
{
    "text": "   Please visit <a target='_blank' href='https://diksha.gov.in/rj/explore'>DIKSHA RAJASTHAN</a><br>Select the Medium and Class to view relevant subject textbook on the board website.<br><br><hr><strong>** </strong>Press 99 to go back to choose another board or press 0 to go to first menu.",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.MN_BOARD = 
{
    "text": "  Please visit <a target='_blank' href='https://diksha.gov.in/mn/explore'>DIKSHA MANIPUR</a><br>Select the Medium and Class to view relevant subject textbook on the board website.<br><br><hr><strong>** </strong>Press 99 to go back to choose another board or press 0 to go to first menu.",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.CG_BOARD = 
{
    "text": " Please visit <a target='_blank' href='https://diksha.gov.in/cg/explore'>DIKSHA CHHATTISGARH</a><br>Select the Medium and Class to view relevant subject textbook on the board website.<br><br><hr><strong>** </strong>Press 99 to go back to choose another board or press 0 to go to first menu.",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.MITRA_BOARD = 
{
    "text": " Please visit <a target='_blank' href='https://diksha.gov.in/mitra/explore'>DIKSHA MAHARASHTRA</a><br>Select the Medium and Class to view relevant subject textbook on the board website.<br><br><hr><strong>** </strong>Press 99 to go back to choose another board or press 0 to go to first menu.",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.BR_BOARD = 
{
    "text": " Please visit <a target='_blank' href='https://diksha.gov.in/br/explore'>DIKSHA BIHAR</a><br>Select the Medium and Class to view relevant subject textbook on the board website.<br><br><hr><strong>** </strong>Press 99 to go back to choose another board or press 0 to go to first menu.",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.OD_BOARD = 
{
    "text": " Please visit <a target='_blank' href='https://diksha.gov.in/od/explore'>DIKSHA ODISHA</a><br>Select the Medium and Class to view relevant subject textbook on the board website.<br><br><hr><strong>** </strong>Press 99 to go back to choose another board or press 0 to go to first menu.",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.AS_BOARD = 
{
    "text": " Please visit <a target='_blank' href='https://diksha.gov.in/as/explore'>DIKSHA ASSAM</a><br>Select the Medium and Class to view relevant subject textbook on the board website.<br><br><hr><strong>** </strong>Press 99 to go back to choose another board or press 0 to go to first menu.",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.MP_BOARD = 
{
    "text": " Please visit <a target='_blank' href='https://diksha.gov.in/mp/explore'>DIKSHA MADHYAPRADESH</a><br>Select the Medium and Class to view relevant subject textbook on the board website.<br><br><hr><strong>** </strong>Press 99 to go back to choose another board or press 0 to go to first menu.",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.HR_BOARD = 
{
    "text": " Please visit <a target='_blank' href='https://diksha.gov.in/hr/explore'>DIKSHA HARYANA</a><br>Select the Medium and Class to view relevant subject textbook on the board website.<br><br><hr><strong>** </strong>Press 99 to go back to choose another board or press 0 to go to first menu.",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.NL_BOARD = 
{
    "text": " Please visit <a target='_blank' href='https://diksha.gov.in/nl/explore'>DIKSHA NAGALAND</a><br>Select the Medium and Class to view relevant subject textbook on the board website.<br><br><hr><strong>** </strong>Press 99 to go back to choose another board or press 0 to go to first menu.",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.GA_BOARD = 
{
    "text": " Please visit <a target='_blank' href='https://diksha.gov.in/ga/explore'>DIKSHA GOA</a><br>Select the Medium and Class to view relevant subject textbook on the board website.<br><br><hr><strong>** </strong>Press 99 to go back to choose another board or press 0 to go to first menu.",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.TS_BOARD = 
{
    "text": " Please visit <a target='_blank' href='https://diksha.gov.in/ts/explore'>DIKSHA TELANGANA</a><br>Select the Medium and Class to view relevant subject textbook on the board website.<br><br><hr><strong>** </strong>Press 99 to go back to choose another board or press 0 to go to first menu.",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.APEKX_BOARD = 
{
    "text": " Please visit <a target='_blank' href='https://diksha.gov.in/apekx/explore'>DIKSHA ANDHRAPRADESH</a><br>Select the Medium and Class to view relevant subject textbook on the board website.<br><br><hr><strong>** </strong>Press 99 to go back to choose another board or press 0 to go to first menu.",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.ML_BOARD = 
{
    "text": " Please visit <a target='_blank' href='https://diksha.gov.in/ml/explore'>DIKSHA MEGHALAYA</a><br>Select the Medium and Class to view relevant subject textbook on the board website.<br><br><hr><strong>** </strong>Press 99 to go back to choose another board or press 0 to go to first menu.",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.NCERT_BOARD =
{
    "text": "Please visit <a target='_blank' href='https://diksha.gov.in/ncert/explore'>DIKSHA NCERT</a><br>Select the Medium and Class to view relevant subject textbook on the board website.<br><br><hr><strong>** </strong>Press 99 to go back to choose another board or press 0 to go to first menu.",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.JH_BOARD = 
{
    "text": "Please visit <a target='_blank' href='https://diksha.gov.in/jh/explore'>DIKSHA JHARKHAND</a><br>Select the Medium and Class to view relevant subject textbook on the board website.<br><br><hr><strong>** </strong>Press 99 to go back to choose another board or press 0 to go to first menu.",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.SK_BOARD = 
{
    "text": "Please visit <a target='_blank' href='https://diksha.gov.in/sk/explore'>DIKSHA SIKKIM</a><br>Select the Medium and Class to view relevant subject textbook on the board website.<br><br><hr><strong>** </strong>Press 99 to go back to choose another board or press 0 to go to first menu.",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.CH_BOARD = 
{
    "text": "Please visit <a target='_blank' href='https://diksha.gov.in/ch/explore'>DIKSHA CHANDIGARH</a><br>Select the Medium and Class to view relevant subject textbook on the board website.<br><br><hr><strong>** </strong>Press 99 to go back to choose another board or press 0 to go to first menu.",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.YOGA_QUIZ = 
{
    "type": "button",
    "data": {
        "text": "NCERT is live with a national quiz on Yoga.Choose your quiz language -",
        "buttons": [{
            "text":"English",
            "value": 1,
        },
        {
            "text":"Hindi",
            "value": 2,
        },
        {
            "text":"Go Back",
            "value": 99,
        },
        {
            "text":"First Menu",
            "value": 0,
        }]
    }
}

message.WEEKLY_CRITICAL_THINKING = 
{
    "type": "button",
    "data": {
        "text": " Please visit: <a target='_blank' href='https://diksha.gov.in/play/collection/do_31290608850520473612338?contentType=TextBook'>Critical thinking questions</a><br><br>Select the Subject to view relevant content on the page",
        "buttons": [
            {
                "text":"Go Back",
                "value": 99,
            },
            {
                "text":"First Menu",
                "value": 0,
            }]
    }
}

message.YOGA_QUIZ_LANGUAGE_ENGLISH =

{
    "type": "button",
    "data": {
        "text": "Play the quiz by visting: <a target='_blank' href='https://bit.ly/EYQ_TARA'>Yoga Quiz in English</a><br>",
        "buttons": [
            {
                "text":"Go Back",
                "value": 99,
            },
            {
                "text":"First Menu",
                "value": 0,
            }]
    }
}

message.YOGA_QUIZ_LANGUAGE_HINDI = 
{
    "type": "button",
    "data": {
        "text": "Play the quiz by visting: <a target='_blank' href='https://bit.ly/HYQ_TARA'>Yoga Quiz in Hindi</a>",
        "buttons": [
            {
                "text":"Go Back",
                "value": 99,
            },
            {
                "text":"First Menu",
                "value": 0,
            }]
    }
}

message.TRAINING = 
{
    "type": "button",
    "data": {
        "text": "  Select the course you would like to do<br>Type the number next to the course<br>",
        "buttons": [{
            "text":"State Courses",
            "value": 1,
        },
        {
            "text":"IGOT COVID Courses",
            "value": 2,
        },
        {
            "text":"Go Back",
            "value": 99,
        },
        {
            "text":"First Menu",
            "value": 0,
        }]
    }
}

message.CHOOSE_STATE_TRAINING_BOARD = 
{
    "type": "button",
    "data": {
        "text": "Which state board do you belong to?<br>Type the number next to the State:<br>",
        "buttons": [{
            "text":"CBSE",
            "value": 1,
        },
        {
            "text":"Uttar Pradesh",
            "value": 2,
        },
        {
            "text":"Madhya Pradesh",
            "value": 3,
        },
        {
            "text":"Gujarat",
            "value": 4,
        },
        {
            "text":"Others",
            "value": 5,
        },
        {
            "text":"Go Back",
            "value": 99,
        },
        {
            "text":"First Menu",
            "value": 0,
        }]
    }
}

message.TRAINING_CBSE_BOARD = 
{
    "text": "Please visit:<a target='_blank' href='https://diksha.gov.in/explore-course?channel=01241974041332940818&appliedFilters=true'>DIKSHA CBSE Course</a><br>Select the Topic, Medium, Class and Subject to view relevant course on the website.<br>",
    "intent": "greet",
    "type": "buttons",
    "buttons": [
        {
            "text":"Go Back",
            "value": 99,
        },
        {
            "text":"First Menu",
            "value": 0,
        }]
}

message.TRAINING_UP_BOARD =
{
    "text": "Please visit:<a target='_blank' href='https://diksha.gov.in/explore-course?channel=01246376237871104093&appliedFilters=true'>DIKSHA UP Course </a>",
    "intent": "greet",
    "type": "buttons",
    "buttons": [
        {
            "text":"Go Back",
            "value": 99,
        },
        {
            "text":"First Menu",
            "value": 0,
        }]
}

message.TRAINING_MP_BOARD = 
{
    "text": "Please visit:<a target='_blank' href='https://diksha.gov.in/explore-course?channel=012936530816278528135&appliedFilters=true'>DIKSHA MP Course</a><br>Select the Topic, Medium, Class and Subject to view relevant course on the website.<br>",
    "intent": "greet",
    "type": "buttons",
    "buttons": [
        {
            "text":"Go Back",
            "value": 99,
        },
        {
            "text":"First Menu",
            "value": 0,
        }]
}

message.TRAINING_GJ_BOARD = 
{
    "text": "Please visit: <a target='_blank' href='https://diksha.gov.in/explore-course?channel=01260242422044262448&appliedFilters=true'>DIKSHA GJ Course</a><br>Select the Topic, Medium, Class and Subject to view relevant course on the website.<br>",
    "intent": "greet",
    "type": "buttons",
    "buttons": [
        {
            "text":"Go Back",
            "value": 99,
        },
        {
            "text":"First Menu",
            "value": 0,
        }]
}

message.TRAINING_OTHERS_BOARD = 
{
    "text": "Please visit: <a target='_blank' href='https://diksha.gov.in/explore-course'>DIKSHA Course</a><br>Select the Topic, Medium, Class and Subject to view relevant course on the website.<br>",
    "intent": "greet",
    "type": "buttons",
    "buttons": [
        {
            "text":"Go Back",
            "value": 99,
        },
        {
            "text":"First Menu",
            "value": 0,
        }]
}

message.CHOOSE_IGOT_TRAINING_OPTION = 
{
    "type": "button",
    "data": {
        "text": "Select what you are looking for<br>Type the number next to the option:<br></br><br><hr>",
        "buttons": [{
            "text":"Take IGOT course",
            "value": 1,
        },
        {
            "text":"Issues with course/certificate",
            "value": 2,
        },
        {
            "text":"Go Back",
            "value": 99,
        },
        {
            "text":"First Menu",
            "value": 0,
        }
    ]
    }
}

message.IGOT_TRAINING = 
{
    "type": "button",
    "data": {
        "text": "Please visit:<a target='_blank' href='https://igot.gov.in/igot/explore-course'>IGOT Courses</a><br>Select the role to view relevant course on the website.<br>",
        "buttons": [
            {
                "text":"Go Back",
                "value": 99,
            },
            {
                "text":"First Menu",
                "value": 0,
            }]
    }
}

message.CERTIFICATE_ISSUE = 
{
    "type": "button",
    "data": {
        "text": " Please write your concern to support@i-got.freshdesk.com<br><hr><strong>** </strong>Press 99 to go back or press 0 to go to first menu.",
        "buttons": []
    }
}

message.PLAYSTORE = 
{
    "text": " Please visit: <a target='_blank' href='https://play.google.com/store/apps/details?id=in.gov.diksha.app&referrer=utm_source%3Dtara'>DIKSHA mobile app</a><br><br><strong>Step 1.</strong> Download the DIKSHA mobile app from the link given above<br><strong>Step 2.</strong> Install the DIKSHA app<br><strong>Step 3.</strong> Follow the instructions provided in the app<br><br>You are good to go!<br><br><hr><strong>** </strong>Press 0 to go to first menu or type your query directly",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.CONTRIBUTE_CONTENT = 
{
    "text": " Please visit: <a target='_blank' href='https://vdn.diksha.gov.in/'>VIDYADAAN</a><br>Use a desktop or laptop to start contributing content to be used by the nation.<br><br><hr><strong>** </strong>Press 0 to go to first menu or type your query directly.",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.OTHER_OPTIONS = 
{
    "text": " Type the number next to your query:",
    "intent": "greet",
    "type": "buttons",
    "buttons": [{
        "text":"Scan QR code",
        "value": 1,
    },
    {
        "text":"Login issues",
        "value": 2,
    },
    {
        "text":"Reset password",
        "value": 3,
    },
    {
        "text":"Other queries",
        "value": 4,
    }
]
}

message.SCAN_QRCODE = 
{
    "text": "Please visit: <a target='_blank' href='https://diksha.gov.in/help/getting-started/diksha-mobile-app/understanding-qr-code.html'>Scan QR Code</a><br><br><hr><strong>** </strong>Press 99 to go back to choose another query or press 0 to go to first menu.",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.UNABLE_LOGIN = 
{
    "text": " Please visit: <a target='_blank' href='https://diksha.gov.in/help/getting-started/sign-in/index.html'>Login issues​</a><br><br><hr><strong>** </strong>Press 99 to go back to choose another query or press 0 to go to first menu.",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.FORGOT_PASSWORD = 
{
    "text": "Please visit: <a target='_blank' href='https://diksha.gov.in/help/getting-started/recover-password/index.html'>Reset password</a><br><br><hr><strong>** </strong>Press 99 to go back to choose another query or press 0 to go to first menu.",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.OTHERS =
{
    "text": "Please visit: <a target='_blank' href='https://diksha.gov.in/help/getting-started/explore-diksha/index.html'>Other issues</a><br><br><hr><strong>** </strong>Press 99 to go back to choose another query or press 0 to go to first menu.",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.UNKNOWN_OPTION =
{
    "text": "Sorry, I do not understand what you’re asking. Press 0 to go to first menu or type your query directly, so I can help you better.",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.SORRY = 
{
    "text": "Sorry, can you come again please?",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.WRONG_INPUT_AT_FIRST_LEVEL = 
{
    "text": "<span>Sorry, I do not understand what you’re asking. Press 99 to go back or press 0 to go to first menu, so I can help you better.</span>",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.WRONG_INPUT_AT_SECOND_LEVEL = 
{
    "text": "<span>Sorry, I do not understand what you're asking. Press 0 to go to first menu or type your query directly, so I can help you better.</span>",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}


message.START_whatsapp = 
{
    "text": "Hi, I’m TARA, your DIKSHA assistant. How may I help you today? \n Select from one of the following options. Send the number corresponding to your choice \n 1- To find and play content \n 2- To download/update the DIKSHA mobile app \n 3- Other Queries",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.CHOOSE_BOARD_whatsapp = 
{
    "text": "Tell me which of the following board you belong to, so that I can assist you better. Send the number corresponding to the board. \n1- CBSE  \n2- State Board ",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.CBSE_MESSAGE_whatsapp = 
{
    "text": "Please visit 'https://diksha.gov.in/CBSE/explore to access eResources, videos, DFs and practice sheets from the topics in your syllabus.  Happy learning!\n\n Press 99 to go back to the previous menu or 0 to the main menu ",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.CHOOSE_STATE_BOARD_whatsapp = 
{
    "text": "Which of the following state boards you belong to? Send the number corresponding to your choice \n1- Tamil Nadu \n2- Karnataka \n3- Gujarat \n4- Uttar Pradesh",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.TN_BOARD_whatsapp = 
{
    "text": "Please visit https://diksha.gov.in/tn/explore Select the Medium and Class to view relevant subject textbook\n\nPress 99 to go back to the previous menu or 0 to the main menu.",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.KA_BOARD_whatsapp = 
{
    "text": "Please visit https://diksha.gov.in/ka/explore Select the Medium and Class to view relevant subject textbook\n\nPress 99 to go back to the previous menu or 0 to the main menu.",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.GJ_BOARD_whatsapp = 
{
    "text": "Please visit https://diksha.gov.in/gj/explore Select the Medium and Class to view relevant subject textbook\n\nPress 99 to go back to the previous menu or 0 to the main menu.",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.UP_BOARD_whatsapp = 
{
    "text": "Please visit https://diksha.gov.in/up/explore Select the Medium and Class to view relevant subject textbook\n\nPress 99 to go back to the previous menu or 0 to the main menu.",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.PLAYSTORE_whatsapp = 
{
    "text": "Please visit https://play.google.com/store/apps/details?id=in.gov.diksha.app&hl=en_IN​. \n\nPress 99 to go back to the previous menu or 0 to the main menu.",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.OTHER_OPTIONS_whatsapp = 
{
    "text": "Please select from the following options. Send the number corresponding to your choice - \n1- How to scan using qr code?  \n2- Not able to Login \n3- Others",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.SCAN_QRCODE_whatsapp = 
{
    "text": "Please visit: https://diksha.gov.in/help/getting-started/diksha-mobile-app/understanding-qr-code.html. \n\nPress 99 to go back to the previous menu or 0 to the main menu. ",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.UNABLE_LOGIN_whatsapp = 
{
    "text": "Please visit: https://diksha.gov.in/help/getting-started/sign-in/index.html. \n\nPress 99 to go back to the previous menu or 0 to the main menu ",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.OTHERS_whatsapp = 
{
    "text": "Please visit: https://diksha.gov.in/help/getting-started/explore-diksha/index.html. \n\nPress 99 to go back to the previous menu or 0 to the main menu. ",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.UNKNOWN_OPTION_whatsapp =
{
    "text": "Sorry, I do not understand what you’re asking. Please choose from the following options or press 0 for the main menu, so I can help you better",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.SORRY_whatsapp = 
{
    "text": "Sorry, can you come again please?",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.START_telegram = 
{
    "text": "Hi, I’m TARA, your DIKSHA assistant. How may I help you today? \n Select from one of the following options. Send the number corresponding to your choice \n 1- To find and play content \n 2- To download/update the DIKSHA mobile app \n 3- Other Queries",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.CHOOSE_BOARD_telegram = 
{
    "text": "Tell me which of the following board you belong to, so that I can assist you better. Send the number corresponding to the board.: \n1- CBSE  \n2- State Board ",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.CBSE_MESSAGE_telegram = 
{
    "text": "Please visit 'https://diksha.gov.in/CBSE/explore to access eResources, videos, DFs and practice sheets from the topics in your syllabus.  Happy learning!\n\n Press 99 to go back to the previous menu or 0 to the main menu ",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.CHOOSE_STATE_BOARD_telegram = 
{
    "text": "Which of the following state boards you belong to? Send the number corresponding to your choice \n1- Tamil Nadu \n2- Karnataka \n3- Gujarat \n4- Uttar Pradesh",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.TN_BOARD_telegram = 
{
    "text": "Please visit https://diksha.gov.in/tn/explore Select the Medium and Class to view relevant subject textbook\n\nPress 99 to go back to the previous menu or 0 to the main menu.",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}
message.KA_BOARD_telegram = 
{
    "text": "Please visit https://diksha.gov.in/ka/explore Select the Medium and Class to view relevant subject textbook\n\nPress 99 to go back to the previous menu or 0 to the main menu.",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.GJ_BOARD_telegram = 
{
    "text": "Please visit https://diksha.gov.in/gj/explore Select the Medium and Class to view relevant subject textbook\n\nPress 99 to go back to the previous menu or 0 to the main menu.",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.UP_BOARD_telegram = 
{
    "text": "Please visit https://diksha.gov.in/up/explore Select the Medium and Class to view relevant subject textbook\n\nPress 99 to go back to the previous menu or 0 to the main menu.",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.PLAYSTORE_telegram = 
{
    "text": "Please visit https://play.google.com/store/apps/details?id=in.gov.diksha.app&hl=en_IN. \n\nPress 99 to go back to the previous menu or 0 to the main menu.",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.OTHER_OPTIONS_telegram = 
{
    "text": "Please select from the following options- \n1- How to scan using qr code?  \n2- Not able to Login \n3- Others",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.SCAN_QRCODE_telegram =
{
    "text": "Please visit: https://diksha.gov.in/help/getting-started/diksha-mobile-app/understanding-qr-code.html. \n\nPress 99 to go back to the previous menu or 0 to the main menu. ",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.UNABLE_LOGIN_telegram =
{
    "text": "Please visit: https://diksha.gov.in/help/getting-started/sign-in/index.html. \n\nPress 99 to go back to the previous menu or 0 to the main menu ",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.OTHERS_telegram = 
{
    "text": "Please visit: https://diksha.gov.in/help/getting-started/explore-diksha/index.html. \n\nPress 99 to go back to the previous menu or 0 to the main menu. ",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.UNKNOWN_OPTION_telegram =
{
    "text": "Sorry, I do not understand what you’re asking. Please choose from the following options or press 0 for the main menu, so I can help you better",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

module.exports.message = message;

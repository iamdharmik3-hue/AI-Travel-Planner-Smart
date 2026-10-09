/* =========================================================
   WANDERAI - MAIN JAVASCRIPT
========================================================= */


/* =========================================================
   GLOBAL SETTINGS
========================================================= */

let selectedTripType = "India";

let selectedTransport = "Flight";

let currentLanguage = "en";


/* =========================================================
   INDIA STATE → CITY DATABASE
========================================================= */

const indiaDestinations = {

    "Gujarat": [
        "Ahmedabad",
        "Bhavnagar",
        "Vadodara",
        "Surat",
        "Rajkot",
        "Dwarka",
        "Somnath",
        "Gandhinagar",
        "Junagadh",
        "Kutch",
        "Patan"
    ],

    "Maharashtra": [
        "Mumbai",
        "Pune",
        "Nashik",
        "Nagpur",
        "Aurangabad",
        "Lonavala",
        "Mahabaleshwar",
        "Shirdi",
        "Alibaug"
    ],

    "Rajasthan": [
        "Jaipur",
        "Jodhpur",
        "Udaipur",
        "Jaisalmer",
        "Ajmer",
        "Pushkar",
        "Mount Abu",
        "Bikaner"
    ],

    "Goa": [
        "Panaji",
        "Calangute",
        "Baga",
        "Candolim",
        "Margao",
        "Vasco da Gama"
    ],

    "Himachal Pradesh": [
        "Manali",
        "Shimla",
        "Dharamshala",
        "Kasol",
        "Dalhousie",
        "Kullu",
        "Spiti"
    ],

    "Uttarakhand": [
        "Dehradun",
        "Mussoorie",
        "Rishikesh",
        "Haridwar",
        "Nainital",
        "Auli",
        "Kedarnath",
        "Badrinath"
    ],

    "Kerala": [
        "Kochi",
        "Munnar",
        "Alappuzha",
        "Kovalam",
        "Wayanad",
        "Thekkady",
        "Thiruvananthapuram"
    ],

    "Tamil Nadu": [
        "Chennai",
        "Ooty",
        "Kodaikanal",
        "Madurai",
        "Coimbatore",
        "Rameswaram"
    ],

    "Karnataka": [
        "Bengaluru",
        "Mysuru",
        "Coorg",
        "Hampi",
        "Mangalore",
        "Chikmagalur"
    ],

    "Delhi": [
        "New Delhi"
    ],

    "Uttar Pradesh": [
        "Agra",
        "Varanasi",
        "Lucknow",
        "Ayodhya",
        "Mathura",
        "Vrindavan",
        "Prayagraj"
    ],

    "West Bengal": [
        "Kolkata",
        "Darjeeling",
        "Digha",
        "Siliguri"
    ],

    "Jammu and Kashmir": [
        "Srinagar",
        "Gulmarg",
        "Pahalgam",
        "Jammu",
        "Sonamarg"
    ],

    "Punjab": [
        "Amritsar",
        "Ludhiana",
        "Jalandhar",
        "Patiala"
    ],

    "Assam": [
        "Guwahati",
        "Kaziranga",
        "Jorhat",
        "Dibrugarh"
    ]

};


/* State/UT -> district lists (reviewed snapshot; administrative boundaries can change). */
const indiaDistricts = {
    'Andhra Pradesh': ['Alluri Sitharama Raju', 'Anakapalli', 'Anantapuramu', 'Annamayya', 'Bapatla', 'Chittoor', 'Dr B R Ambedkar Konaseema', 'East Godavari', 'Eluru', 'Guntur', 'Kakinada', 'Krishna', 'Kurnool', 'Nandyal', 'NTR', 'Palnadu', 'Parvathipuram Manyam', 'Prakasam', 'Sri Potti Sriramulu Nellore', 'Sri Sathya Sai', 'Srikakulam', 'Tirupati', 'Visakhapatnam', 'Vizianagaram', 'West Godavari', 'YSR Kadapa'],
    'Arunachal Pradesh': ['Anjaw', 'Changlang', 'Dibang Valley', 'East Kameng', 'East Siang', 'Itanagar Capital Complex', 'Kamle', 'Keyi Panyor', 'Kra Daadi', 'Kurung Kumey', 'Lepa Rada', 'Lohit', 'Longding', 'Lower Dibang Valley', 'Lower Siang', 'Lower Subansiri', 'Namsai', 'Pakke Kessang', 'Papum Pare', 'Shi Yomi', 'Siang', 'Tawang', 'Tirap', 'Upper Siang', 'Upper Subansiri', 'West Kameng', 'West Siang'],
    'Assam': ['Bajali', 'Baksa', 'Barpeta', 'Biswanath', 'Bongaigaon', 'Cachar', 'Charaideo', 'Chirang', 'Darrang', 'Dhemaji', 'Dhubri', 'Dibrugarh', 'Dima Hasao', 'Goalpara', 'Golaghat', 'Hailakandi', 'Hojai', 'Jorhat', 'Kamrup', 'Kamrup Metropolitan', 'Karbi Anglong', 'Kokrajhar', 'Lakhimpur', 'Majuli', 'Morigaon', 'Nagaon', 'Nalbari', 'Sivasagar', 'Sonitpur', 'South Salmara-Mankachar', 'Sribhumi', 'Tamulpur', 'Tinsukia', 'Udalguri', 'West Karbi Anglong'],
    'Bihar': ['Araria', 'Arwal', 'Aurangabad', 'Banka', 'Begusarai', 'Bhagalpur', 'Bhojpur', 'Buxar', 'Darbhanga', 'East Champaran', 'Gaya', 'Gopalganj', 'Jamui', 'Jehanabad', 'Kaimur', 'Katihar', 'Khagaria', 'Kishanganj', 'Lakhisarai', 'Madhepura', 'Madhubani', 'Munger', 'Muzaffarpur', 'Nalanda', 'Nawada', 'Patna', 'Purnia', 'Rohtas', 'Saharsa', 'Samastipur', 'Saran', 'Sheikhpura', 'Sheohar', 'Sitamarhi', 'Siwan', 'Supaul', 'Vaishali', 'West Champaran'],
    'Chhattisgarh': ['Balod', 'Baloda Bazar-Bhatapara', 'Balrampur-Ramanujganj', 'Bastar', 'Bemetara', 'Bijapur', 'Bilaspur', 'Dantewada', 'Dhamtari', 'Durg', 'Gariaband', 'Gaurela-Pendra-Marwahi', 'Janjgir-Champa', 'Jashpur', 'Kabirdham', 'Kanker', 'Khairagarh-Chhuikhadan-Gandai', 'Kondagaon', 'Korba', 'Korea', 'Mahasamund', 'Manendragarh-Chirmiri-Bharatpur', 'Mohla-Manpur-Ambagarh Chowki', 'Mungeli', 'Narayanpur', 'Raigarh', 'Raipur', 'Rajnandgaon', 'Sakti', 'Sarangarh-Bilaigarh', 'Sukma', 'Surajpur', 'Surguja'],
    'Goa': ['North Goa', 'South Goa'],
    'Gujarat': ['Ahmedabad', 'Amreli', 'Anand', 'Aravalli', 'Banaskantha', 'Bharuch', 'Bhavnagar', 'Botad', 'Chhota Udaipur', 'Dahod', 'Dang', 'Devbhoomi Dwarka', 'Gandhinagar', 'Gir Somnath', 'Jamnagar', 'Junagadh', 'Kachchh', 'Kheda', 'Mahisagar', 'Mehsana', 'Morbi', 'Narmada', 'Navsari', 'Panchmahal', 'Patan', 'Porbandar', 'Rajkot', 'Sabarkantha', 'Surat', 'Surendranagar', 'Tapi', 'Vadodara', 'Valsad'],
    'Haryana': ['Ambala', 'Bhiwani', 'Charkhi Dadri', 'Faridabad', 'Fatehabad', 'Gurugram', 'Hisar', 'Jhajjar', 'Jind', 'Kaithal', 'Karnal', 'Kurukshetra', 'Mahendragarh', 'Nuh', 'Palwal', 'Panchkula', 'Panipat', 'Rewari', 'Rohtak', 'Sirsa', 'Sonipat', 'Yamunanagar'],
    'Himachal Pradesh': ['Bilaspur', 'Chamba', 'Hamirpur', 'Kangra', 'Kinnaur', 'Kullu', 'Lahaul and Spiti', 'Mandi', 'Shimla', 'Sirmaur', 'Solan', 'Una'],
    'Jharkhand': ['Bokaro', 'Chatra', 'Deoghar', 'Dhanbad', 'Dumka', 'East Singhbhum', 'Garhwa', 'Giridih', 'Godda', 'Gumla', 'Hazaribagh', 'Jamtara', 'Khunti', 'Koderma', 'Latehar', 'Lohardaga', 'Pakur', 'Palamu', 'Ramgarh', 'Ranchi', 'Sahibganj', 'Seraikela-Kharsawan', 'Simdega', 'West Singhbhum'],
    'Karnataka': ['Bagalkot', 'Ballari', 'Belagavi', 'Bengaluru Rural', 'Bengaluru Urban', 'Bidar', 'Chamarajanagar', 'Chikkaballapura', 'Chikkamagaluru', 'Chitradurga', 'Dakshina Kannada', 'Davanagere', 'Dharwad', 'Gadag', 'Hassan', 'Haveri', 'Kalaburagi', 'Kodagu', 'Kolar', 'Koppal', 'Mandya', 'Mysuru', 'Raichur', 'Ramanagara', 'Shivamogga', 'Tumakuru', 'Udupi', 'Uttara Kannada', 'Vijayanagara', 'Vijayapura', 'Yadgir'],
    'Kerala': ['Alappuzha', 'Ernakulam', 'Idukki', 'Kannur', 'Kasaragod', 'Kollam', 'Kottayam', 'Kozhikode', 'Malappuram', 'Palakkad', 'Pathanamthitta', 'Thiruvananthapuram', 'Thrissur', 'Wayanad'],
    'Madhya Pradesh': ['Agar Malwa', 'Alirajpur', 'Anuppur', 'Ashoknagar', 'Balaghat', 'Barwani', 'Betul', 'Bhind', 'Bhopal', 'Burhanpur', 'Chhatarpur', 'Chhindwara', 'Damoh', 'Datia', 'Dewas', 'Dhar', 'Dindori', 'Guna', 'Gwalior', 'Harda', 'Indore', 'Jabalpur', 'Jhabua', 'Katni', 'Khandwa', 'Khargone', 'Maihar', 'Mandla', 'Mandsaur', 'Mauganj', 'Morena', 'Narmadapuram', 'Narsinghpur', 'Neemuch', 'Niwari', 'Panna', 'Pandhurna', 'Raisen', 'Rajgarh', 'Ratlam', 'Rewa', 'Sagar', 'Satna', 'Sehore', 'Seoni', 'Shahdol', 'Shajapur', 'Sheopur', 'Shivpuri', 'Sidhi', 'Singrauli', 'Tikamgarh', 'Ujjain', 'Umaria', 'Vidisha'],
    'Maharashtra': ['Ahilyanagar', 'Akola', 'Amravati', 'Beed', 'Bhandara', 'Buldhana', 'Chandrapur', 'Chhatrapati Sambhajinagar', 'Dharashiv', 'Dhule', 'Gadchiroli', 'Gondia', 'Hingoli', 'Jalgaon', 'Jalna', 'Kolhapur', 'Latur', 'Mumbai City', 'Mumbai Suburban', 'Nagpur', 'Nanded', 'Nandurbar', 'Nashik', 'Palghar', 'Parbhani', 'Pune', 'Raigad', 'Ratnagiri', 'Sangli', 'Satara', 'Sindhudurg', 'Solapur', 'Thane', 'Wardha', 'Washim', 'Yavatmal'],
    'Manipur': ['Bishnupur', 'Chandel', 'Churachandpur', 'Imphal East', 'Imphal West', 'Jiribam', 'Kakching', 'Kamjong', 'Kangpokpi', 'Noney', 'Pherzawl', 'Senapati', 'Tamenglong', 'Tengnoupal', 'Thoubal', 'Ukhrul'],
    'Meghalaya': ['Eastern West Khasi Hills', 'East Garo Hills', 'East Jaintia Hills', 'East Khasi Hills', 'North Garo Hills', 'Ri-Bhoi', 'South Garo Hills', 'South West Garo Hills', 'South West Khasi Hills', 'West Garo Hills', 'West Jaintia Hills', 'West Khasi Hills'],
    'Mizoram': ['Aizawl', 'Champhai', 'Hnahthial', 'Khawzawl', 'Kolasib', 'Lawngtlai', 'Lunglei', 'Mamit', 'Saiha', 'Saitual', 'Serchhip'],
    'Nagaland': ['Chumoukedima', 'Dimapur', 'Kiphire', 'Kohima', 'Longleng', 'Mokokchung', 'Mon', 'Niuland', 'Noklak', 'Peren', 'Phek', 'Shamator', 'Tseminyu', 'Tuensang', 'Wokha', 'Zunheboto'],
    'Odisha': ['Angul', 'Balangir', 'Balasore', 'Bargarh', 'Bhadrak', 'Boudh', 'Cuttack', 'Deogarh', 'Dhenkanal', 'Gajapati', 'Ganjam', 'Jagatsinghpur', 'Jajpur', 'Jharsuguda', 'Kalahandi', 'Kandhamal', 'Kendrapara', 'Kendujhar', 'Khordha', 'Koraput', 'Malkangiri', 'Mayurbhanj', 'Nabarangpur', 'Nayagarh', 'Nuapada', 'Puri', 'Rayagada', 'Sambalpur', 'Subarnapur', 'Sundargarh'],
    'Punjab': ['Amritsar', 'Barnala', 'Bathinda', 'Faridkot', 'Fatehgarh Sahib', 'Fazilka', 'Ferozepur', 'Gurdaspur', 'Hoshiarpur', 'Jalandhar', 'Kapurthala', 'Ludhiana', 'Malerkotla', 'Mansa', 'Moga', 'Pathankot', 'Patiala', 'Rupnagar', 'Sahibzada Ajit Singh Nagar', 'Sangrur', 'Shaheed Bhagat Singh Nagar', 'Sri Muktsar Sahib', 'Tarn Taran'],
    'Rajasthan': ['Ajmer', 'Alwar', 'Balotra', 'Banswara', 'Baran', 'Barmer', 'Beawar', 'Bharatpur', 'Bhilwara', 'Bikaner', 'Bundi', 'Chittorgarh', 'Churu', 'Dausa', 'Deeg', 'Dholpur', 'Didwana-Kuchaman', 'Dungarpur', 'Ganganagar', 'Hanumangarh', 'Jaipur', 'Jaisalmer', 'Jalore', 'Jhalawar', 'Jhunjhunu', 'Jodhpur', 'Karauli', 'Kota', 'Nagaur', 'Pali', 'Phalodi', 'Pratapgarh', 'Rajsamand', 'Salumbar', 'Sawai Madhopur', 'Sikar', 'Sirohi', 'Tonk', 'Udaipur'],
    'Sikkim': ['Gangtok', 'Gyalshing', 'Mangan', 'Namchi', 'Pakyong', 'Soreng'],
    'Tamil Nadu': ['Ariyalur', 'Chengalpattu', 'Chennai', 'Coimbatore', 'Cuddalore', 'Dharmapuri', 'Dindigul', 'Erode', 'Kallakurichi', 'Kancheepuram', 'Kanniyakumari', 'Karur', 'Krishnagiri', 'Madurai', 'Mayiladuthurai', 'Nagapattinam', 'Namakkal', 'Nilgiris', 'Perambalur', 'Pudukkottai', 'Ramanathapuram', 'Ranipet', 'Salem', 'Sivaganga', 'Tenkasi', 'Thanjavur', 'Theni', 'Thoothukudi', 'Tiruchirappalli', 'Tirunelveli', 'Tirupathur', 'Tiruppur', 'Tiruvallur', 'Tiruvannamalai', 'Tiruvarur', 'Vellore', 'Viluppuram', 'Virudhunagar'],
    'Telangana': ['Adilabad', 'Bhadradri Kothagudem', 'Hanumakonda', 'Hyderabad', 'Jagtial', 'Jangaon', 'Jayashankar Bhupalpally', 'Jogulamba Gadwal', 'Kamareddy', 'Karimnagar', 'Khammam', 'Kumuram Bheem Asifabad', 'Mahabubabad', 'Mahabubnagar', 'Mancherial', 'Medak', 'Medchal-Malkajgiri', 'Mulugu', 'Nagarkurnool', 'Nalgonda', 'Narayanpet', 'Nirmal', 'Nizamabad', 'Peddapalli', 'Rajanna Sircilla', 'Rangareddy', 'Sangareddy', 'Siddipet', 'Suryapet', 'Vikarabad', 'Wanaparthy', 'Warangal', 'Yadadri Bhuvanagiri'],
    'Tripura': ['Dhalai', 'Gomati', 'Khowai', 'North Tripura', 'Sepahijala', 'South Tripura', 'Unakoti', 'West Tripura'],
    'Uttar Pradesh': ['Agra', 'Aligarh', 'Ambedkar Nagar', 'Amethi', 'Amroha', 'Auraiya', 'Ayodhya', 'Azamgarh', 'Baghpat', 'Bahraich', 'Ballia', 'Balrampur', 'Banda', 'Barabanki', 'Bareilly', 'Basti', 'Bhadohi', 'Bijnor', 'Budaun', 'Bulandshahr', 'Chandauli', 'Chitrakoot', 'Deoria', 'Etah', 'Etawah', 'Farrukhabad', 'Fatehpur', 'Firozabad', 'Gautam Buddha Nagar', 'Ghaziabad', 'Ghazipur', 'Gonda', 'Gorakhpur', 'Hamirpur', 'Hapur', 'Hardoi', 'Hathras', 'Jalaun', 'Jaunpur', 'Jhansi', 'Kannauj', 'Kanpur Dehat', 'Kanpur Nagar', 'Kasganj', 'Kaushambi', 'Kushinagar', 'Lakhimpur Kheri', 'Lalitpur', 'Lucknow', 'Maharajganj', 'Mahoba', 'Mainpuri', 'Mathura', 'Mau', 'Meerut', 'Mirzapur', 'Moradabad', 'Muzaffarnagar', 'Pilibhit', 'Pratapgarh', 'Prayagraj', 'Raebareli', 'Rampur', 'Saharanpur', 'Sambhal', 'Sant Kabir Nagar', 'Shahjahanpur', 'Shamli', 'Shrawasti', 'Siddharthnagar', 'Sitapur', 'Sonbhadra', 'Sultanpur', 'Unnao', 'Varanasi'],
    'Uttarakhand': ['Almora', 'Bageshwar', 'Chamoli', 'Champawat', 'Dehradun', 'Haridwar', 'Nainital', 'Pauri Garhwal', 'Pithoragarh', 'Rudraprayag', 'Tehri Garhwal', 'Udham Singh Nagar', 'Uttarkashi'],
    'West Bengal': ['Alipurduar', 'Bankura', 'Birbhum', 'Cooch Behar', 'Dakshin Dinajpur', 'Darjeeling', 'Hooghly', 'Howrah', 'Jalpaiguri', 'Jhargram', 'Kalimpong', 'Kolkata', 'Malda', 'Murshidabad', 'Nadia', 'North 24 Parganas', 'Paschim Bardhaman', 'Paschim Medinipur', 'Purba Bardhaman', 'Purba Medinipur', 'Purulia', 'South 24 Parganas', 'Uttar Dinajpur'],
    'Andaman and Nicobar Islands': ['Nicobar', 'North and Middle Andaman', 'South Andaman'],
    'Chandigarh': ['Chandigarh'],
    'Dadra and Nagar Haveli and Daman and Diu': ['Dadra and Nagar Haveli', 'Daman', 'Diu'],
    'Delhi': ['Central Delhi', 'East Delhi', 'New Delhi', 'North Delhi', 'North East Delhi', 'North West Delhi', 'Shahdara', 'South Delhi', 'South East Delhi', 'South West Delhi', 'West Delhi'],
    'Jammu and Kashmir': ['Anantnag', 'Bandipora', 'Baramulla', 'Budgam', 'Doda', 'Ganderbal', 'Jammu', 'Kathua', 'Kishtwar', 'Kulgam', 'Kupwara', 'Poonch', 'Pulwama', 'Rajouri', 'Ramban', 'Reasi', 'Samba', 'Shopian', 'Srinagar', 'Udhampur'],
    'Ladakh': ['Kargil', 'Leh'],
    'Lakshadweep': ['Agatti', 'Amini', 'Andrott', 'Bitra', 'Chetlat', 'Kadmat', 'Kalpeni', 'Kavaratti', 'Kiltan', 'Minicoy'],
    'Puducherry': ['Karaikal', 'Mahe', 'Puducherry', 'Yanam']
};

/* Add city/tourism options for States and Union Territories not in the original list. */
indiaDestinations['Andhra Pradesh'] = Array.from(new Set([...(indiaDestinations['Andhra Pradesh'] || []), 'Visakhapatnam', 'Vijayawada', 'Tirupati', 'Amaravati', 'Araku Valley', 'Rajahmundry']));
indiaDestinations['Arunachal Pradesh'] = Array.from(new Set([...(indiaDestinations['Arunachal Pradesh'] || []), 'Itanagar', 'Tawang', 'Ziro', 'Bomdila', 'Pasighat']));
indiaDestinations['Bihar'] = Array.from(new Set([...(indiaDestinations['Bihar'] || []), 'Patna', 'Gaya', 'Bodh Gaya', 'Nalanda', 'Rajgir']));
indiaDestinations['Haryana'] = Array.from(new Set([...(indiaDestinations['Haryana'] || []), 'Gurugram', 'Faridabad', 'Kurukshetra', 'Panipat', 'Karnal']));
indiaDestinations['Jharkhand'] = Array.from(new Set([...(indiaDestinations['Jharkhand'] || []), 'Ranchi', 'Jamshedpur', 'Deoghar', 'Dhanbad', 'Netarhat']));
indiaDestinations['Madhya Pradesh'] = Array.from(new Set([...(indiaDestinations['Madhya Pradesh'] || []), 'Bhopal', 'Indore', 'Ujjain', 'Gwalior', 'Jabalpur', 'Khajuraho', 'Sanchi']));
indiaDestinations['Manipur'] = Array.from(new Set([...(indiaDestinations['Manipur'] || []), 'Imphal', 'Loktak Lake', 'Ukhrul']));
indiaDestinations['Meghalaya'] = Array.from(new Set([...(indiaDestinations['Meghalaya'] || []), 'Shillong', 'Cherrapunji', 'Mawlynnong', 'Dawki']));
indiaDestinations['Mizoram'] = Array.from(new Set([...(indiaDestinations['Mizoram'] || []), 'Aizawl', 'Lunglei', 'Champhai']));
indiaDestinations['Nagaland'] = Array.from(new Set([...(indiaDestinations['Nagaland'] || []), 'Kohima', 'Dimapur', 'Mon']));
indiaDestinations['Odisha'] = Array.from(new Set([...(indiaDestinations['Odisha'] || []), 'Bhubaneswar', 'Puri', 'Konark', 'Cuttack', 'Chilika Lake']));
indiaDestinations['Sikkim'] = Array.from(new Set([...(indiaDestinations['Sikkim'] || []), 'Gangtok', 'Pelling', 'Namchi', 'Lachung']));
indiaDestinations['Telangana'] = Array.from(new Set([...(indiaDestinations['Telangana'] || []), 'Hyderabad', 'Warangal', 'Nizamabad', 'Bhadrachalam']));
indiaDestinations['Tripura'] = Array.from(new Set([...(indiaDestinations['Tripura'] || []), 'Agartala', 'Udaipur', 'Neermahal']));
indiaDestinations['Andaman and Nicobar Islands'] = Array.from(new Set([...(indiaDestinations['Andaman and Nicobar Islands'] || []), 'Port Blair', 'Havelock Island', 'Neil Island']));
indiaDestinations['Chandigarh'] = Array.from(new Set([...(indiaDestinations['Chandigarh'] || []), 'Chandigarh']));
indiaDestinations['Dadra and Nagar Haveli and Daman and Diu'] = Array.from(new Set([...(indiaDestinations['Dadra and Nagar Haveli and Daman and Diu'] || []), 'Daman', 'Diu', 'Silvassa']));
indiaDestinations['Ladakh'] = Array.from(new Set([...(indiaDestinations['Ladakh'] || []), 'Leh', 'Nubra Valley', 'Pangong Lake', 'Kargil']));
indiaDestinations['Lakshadweep'] = Array.from(new Set([...(indiaDestinations['Lakshadweep'] || []), 'Kavaratti', 'Agatti', 'Minicoy']));
indiaDestinations['Puducherry'] = Array.from(new Set([...(indiaDestinations['Puducherry'] || []), 'Puducherry', 'Karaikal', 'Mahe', 'Yanam']));

/* =========================================================
   INTERNATIONAL COUNTRY → CITY DATABASE
========================================================= */

const internationalDestinations = {

    "United Arab Emirates": [
        "Dubai",
        "Abu Dhabi",
        "Sharjah",
        "Ajman"
    ],

    "Thailand": [
        "Bangkok",
        "Phuket",
        "Pattaya",
        "Chiang Mai",
        "Krabi"
    ],

    "Singapore": [
        "Singapore"
    ],

    "Malaysia": [
        "Kuala Lumpur",
        "Langkawi",
        "Penang",
        "Malacca"
    ],

    "Indonesia": [
        "Bali",
        "Jakarta",
        "Lombok",
        "Yogyakarta"
    ],

    "Nepal": [
        "Kathmandu",
        "Pokhara",
        "Chitwan"
    ],

    "United Kingdom": [
        "London",
        "Manchester",
        "Edinburgh",
        "Liverpool"
    ],

    "France": [
        "Paris",
        "Nice",
        "Lyon",
        "Marseille"
    ],

    "Italy": [
        "Rome",
        "Venice",
        "Milan",
        "Florence"
    ],

    "Switzerland": [
        "Zurich",
        "Geneva",
        "Lucerne",
        "Interlaken"
    ],

    "United States": [
        "New York",
        "Los Angeles",
        "San Francisco",
        "Las Vegas",
        "Miami"
    ],

    "Australia": [
        "Sydney",
        "Melbourne",
        "Brisbane",
        "Perth"
    ],

    "Japan": [
        "Tokyo",
        "Osaka",
        "Kyoto",
        "Hiroshima"
    ],

    "South Korea": [
        "Seoul",
        "Busan",
        "Jeju"
    ]

};


/* =========================================================
   DESTINATION INFORMATION
========================================================= */

const destinationData = {

    "Goa": {
        state: "Goa",
        country: "India",

        places: [
            ["09:00 AM", "Baga Beach", "Relax at Baga Beach and explore the surrounding area."],
            ["11:00 AM", "Calangute Beach", "Visit Calangute Beach and enjoy the coastal atmosphere."],
            ["01:30 PM", "Goan Lunch", "Try authentic Goan food at a local restaurant."],
            ["03:30 PM", "Fort Aguada", "Explore the historic Portuguese-era fort and viewpoint."],
            ["05:30 PM", "Candolim Beach", "Enjoy the sunset and spend some relaxing time by the sea."],
            ["08:00 PM", "Baga Night Market", "Explore the evening market and local food options."],

            ["09:00 AM", "Chapora Fort", "Explore the historic Chapora Fort and enjoy coastal views."],
            ["11:00 AM", "Vagator Beach", "Visit Vagator Beach and enjoy the North Goa coastline."],
            ["03:30 PM", "Anjuna Beach", "Explore Anjuna Beach and the surrounding area."],
            ["05:30 PM", "Anjuna Flea Market", "Explore local shopping and handicrafts."],
            ["07:30 PM", "Morjim Beach", "Relax at Morjim Beach and enjoy the evening atmosphere."]
        ]
    },


    "Panaji": {
        state: "Goa",
        country: "India",

        places: [
            ["09:00 AM", "Basilica of Bom Jesus", "Visit the historic Basilica in Old Goa."],
            ["10:30 AM", "Se Cathedral", "Explore one of Old Goa's famous churches."],
            ["01:00 PM", "Lunch in Panaji", "Enjoy Goan cuisine at a local restaurant."],
            ["03:00 PM", "Fontainhas", "Walk through the colourful Latin Quarter of Panaji."],
            ["05:30 PM", "Mandovi Riverfront", "Enjoy an evening walk near the Mandovi River."],
            ["08:00 PM", "Dinner", "Enjoy dinner at a Panaji restaurant."],

            ["09:00 AM", "Dona Paula", "Visit the famous Dona Paula viewpoint."],
            ["11:00 AM", "Miramar Beach", "Relax at Miramar Beach."],
            ["03:00 PM", "Reis Magos Fort", "Explore the historic fort across the Mandovi River."],
            ["05:30 PM", "Panjim Market", "Explore local shops and city life."]
        ]
    },


    "Manali": {
        state: "Himachal Pradesh",
        country: "India",

        places: [
            ["08:00 AM", "Hadimba Temple", "Visit the famous Hadimba Devi Temple."],
            ["10:00 AM", "Manali Nature Park", "Enjoy a peaceful walk through the forest."],
            ["12:30 PM", "Mall Road", "Explore shops and local attractions."],
            ["02:00 PM", "Lunch", "Enjoy Himachali cuisine."],
            ["03:30 PM", "Vashisht Temple", "Visit the historic temple and surrounding village."],
            ["06:00 PM", "Beas River", "Relax beside the Beas River."],

            ["08:00 AM", "Solang Valley", "Enjoy mountain views and outdoor activities."],
            ["11:00 AM", "Rohtang Pass", "Visit the high mountain pass when accessible."],
            ["03:00 PM", "Old Manali", "Explore the cafes and streets of Old Manali."],
            ["05:30 PM", "Manu Temple", "Visit the historic Manu Temple."]
        ]
    },


    "Shimla": {
        state: "Himachal Pradesh",
        country: "India",

        places: [
            ["08:00 AM", "The Ridge", "Enjoy views from the famous Ridge."],
            ["09:30 AM", "Christ Church", "Visit the historic church at The Ridge."],
            ["11:00 AM", "Mall Road", "Explore shops and local attractions."],
            ["01:30 PM", "Lunch", "Enjoy local Himachali food."],
            ["03:00 PM", "Jakhoo Temple", "Visit the famous hilltop temple."],
            ["06:00 PM", "Scandal Point", "Enjoy the evening views."],

            ["08:00 AM", "Kufri", "Visit the popular hill destination near Shimla."],
            ["11:00 AM", "Himalayan Nature Park", "Explore the nature park near Kufri."],
            ["03:00 PM", "Viceregal Lodge", "Visit the historic Indian Institute of Advanced Study building."],
            ["05:30 PM", "Annandale", "Explore the scenic open area of Shimla."]
        ]
    },


    "Jaipur": {
        state: "Rajasthan",
        country: "India",

        places: [
            ["08:00 AM", "Amber Fort", "Explore the historic Amber Fort."],
            ["10:30 AM", "Jal Mahal", "Stop at the famous palace surrounded by Man Sagar Lake."],
            ["12:30 PM", "Lunch", "Enjoy a traditional Rajasthani meal."],
            ["02:00 PM", "City Palace", "Explore the royal City Palace complex."],
            ["04:00 PM", "Hawa Mahal", "Visit the iconic Palace of Winds."],
            ["06:00 PM", "Johari Bazaar", "Explore Jaipur's famous local market."],

            ["08:00 AM", "Jantar Mantar", "Explore the historic astronomical observatory."],
            ["10:30 AM", "Nahargarh Fort", "Enjoy panoramic views of Jaipur."],
            ["03:00 PM", "Albert Hall Museum", "Visit Jaipur's famous museum."],
            ["05:30 PM", "Birla Mandir", "Visit the beautiful white marble temple."]
        ]
    },


    "Jodhpur": {
        state: "Rajasthan",
        country: "India",

        places: [
            ["08:00 AM", "Mehrangarh Fort", "Explore one of India's famous hill forts."],
            ["11:00 AM", "Jaswant Thada", "Visit the beautiful marble memorial."],
            ["01:00 PM", "Lunch", "Enjoy local Rajasthani cuisine."],
            ["03:00 PM", "Blue City", "Explore the famous blue-painted streets."],
            ["05:30 PM", "Clock Tower Market", "Shop for local products and food."],
            ["07:30 PM", "Rooftop Dinner", "Enjoy dinner with views of the fort."],

            ["08:00 AM", "Umaid Bhawan Palace", "Explore the famous palace complex."],
            ["11:00 AM", "Mandore Gardens", "Visit the historic gardens and monuments."],
            ["03:00 PM", "Rao Jodha Desert Rock Park", "Explore the natural landscape near Mehrangarh."],
            ["05:30 PM", "Toorji Ka Jhalra", "Visit the historic stepwell."]
        ]
    },


    "Udaipur": {
        state: "Rajasthan",
        country: "India",

        places: [
            ["08:00 AM", "City Palace", "Explore the magnificent City Palace."],
            ["10:30 AM", "Jagdish Temple", "Visit the historic temple."],
            ["12:30 PM", "Lunch", "Enjoy traditional Rajasthani food."],
            ["02:30 PM", "Lake Pichola", "Enjoy the beautiful lake surroundings."],
            ["05:30 PM", "Sajjangarh Palace", "Enjoy panoramic sunset views."],
            ["08:00 PM", "Dinner", "Dinner near Lake Pichola."],

            ["08:00 AM", "Saheliyon Ki Bari", "Explore the historic garden."],
            ["11:00 AM", "Bagore Ki Haveli", "Visit the historic haveli."],
            ["03:00 PM", "Fateh Sagar Lake", "Enjoy views around the lake."],
            ["05:30 PM", "Maharana Pratap Memorial", "Visit the historic memorial."]
        ]
    },


    "Mumbai": {
        state: "Maharashtra",
        country: "India",

        places: [
            ["08:00 AM", "Gateway of India", "Visit Mumbai's iconic waterfront landmark."],
            ["10:00 AM", "Colaba Causeway", "Explore shops and local streets."],
            ["12:30 PM", "Lunch", "Enjoy Mumbai-style local food."],
            ["02:00 PM", "Chhatrapati Shivaji Maharaj Terminus", "See the historic railway station."],
            ["04:30 PM", "Marine Drive", "Relax along the famous Marine Drive."],
            ["06:30 PM", "Girgaon Chowpatty", "Enjoy the evening atmosphere."],

            ["08:00 AM", "Elephanta Caves", "Explore the historic cave temples."],
            ["11:30 AM", "Siddhivinayak Temple", "Visit the famous temple."],
            ["03:00 PM", "Bandra-Worli Sea Link", "See the iconic Mumbai sea link."],
            ["05:30 PM", "Bandra Bandstand", "Enjoy the coastal promenade."]
        ]
    },


    "Ahmedabad": {
        state: "Gujarat",
        country: "India",

        places: [
            ["08:00 AM", "Sabarmati Ashram", "Visit the historic Sabarmati Ashram."],
            ["10:00 AM", "Adalaj Stepwell", "Explore the beautiful historic stepwell."],
            ["12:30 PM", "Gujarati Lunch", "Enjoy traditional Gujarati food."],
            ["02:30 PM", "Kankaria Lake", "Spend time around Kankaria Lake."],
            ["05:00 PM", "Riverfront", "Enjoy an evening walk at Sabarmati Riverfront."],
            ["08:00 PM", "Manek Chowk", "Explore the famous night food market."],

            ["08:00 AM", "Sidi Saiyyed Mosque", "Visit the famous historic mosque."],
            ["10:30 AM", "Jama Masjid", "Explore the historic mosque in the old city."],
            ["03:00 PM", "Hutheesing Jain Temple", "Visit the beautiful Jain temple."],
            ["05:30 PM", "Science City", "Explore Ahmedabad's science and education attraction."]
        ]
    },


    "Dwarka": {
        state: "Gujarat",
        country: "India",

        places: [
            ["07:00 AM", "Dwarkadhish Temple", "Visit the famous Dwarkadhish Temple."],
            ["10:00 AM", "Gomti Ghat", "Explore the sacred riverfront."],
            ["12:30 PM", "Lunch", "Enjoy a Gujarati meal."],
            ["02:30 PM", "Rukmini Devi Temple", "Visit the historic temple."],
            ["04:30 PM", "Bet Dwarka", "Explore the island destination."],
            ["07:00 PM", "Shivrajpur Beach", "Relax near the coast."],

            ["08:00 AM", "Nageshwar Jyotirlinga", "Visit the famous Shiva temple."],
            ["11:00 AM", "Sudama Setu", "Walk across the pedestrian bridge near Dwarkadhish Temple."],
            ["03:00 PM", "Gopi Talav", "Visit the historic and scenic lake area."]
        ]
    },


    "Somnath": {
        state: "Gujarat",
        country: "India",

        places: [
            ["07:00 AM", "Somnath Temple", "Visit the famous Jyotirlinga temple."],
            ["10:00 AM", "Triveni Sangam", "Visit the sacred confluence."],
            ["12:30 PM", "Lunch", "Enjoy Gujarati food."],
            ["03:00 PM", "Bhalka Tirth", "Visit the historic pilgrimage site."],
            ["05:30 PM", "Somnath Beach", "Relax near the Arabian Sea."],
            ["07:30 PM", "Temple Evening View", "Enjoy the evening atmosphere around Somnath Temple."],

            ["08:00 AM", "Prabhas Patan Museum", "Explore the local history museum."],
            ["11:00 AM", "Surya Mandir", "Visit the historic Sun Temple area."],
            ["03:00 PM", "Dehotsarg Teerth", "Visit the important pilgrimage site."]
        ]
    },


    "Rishikesh": {
        state: "Uttarakhand",
        country: "India",

        places: [
            ["07:00 AM", "Laxman Jhula Area", "Explore the riverside area."],
            ["09:00 AM", "Ram Jhula", "Visit the famous suspension bridge area."],
            ["11:00 AM", "Beatles Ashram", "Explore the historic ashram."],
            ["01:00 PM", "Lunch", "Enjoy local vegetarian food."],
            ["04:00 PM", "Ganga Ghat", "Relax beside the Ganges."],
            ["06:00 PM", "Ganga Aarti", "Attend the evening Ganga Aarti."],

            ["07:00 AM", "Neer Garh Waterfall", "Visit the scenic waterfall."],
            ["10:00 AM", "Parmarth Niketan", "Explore the riverside ashram."],
            ["03:00 PM", "Triveni Ghat", "Visit the important riverside ghat."],
            ["05:00 PM", "Swarg Ashram", "Explore the peaceful riverside area."]
        ]
    },


    "Munnar": {
        state: "Kerala",
        country: "India",

        places: [
            ["08:00 AM", "Tea Gardens", "Explore Munnar's famous tea plantations."],
            ["10:30 AM", "Mattupetty Dam", "Enjoy views around the dam."],
            ["12:30 PM", "Lunch", "Enjoy Kerala cuisine."],
            ["02:30 PM", "Echo Point", "Visit the popular viewpoint."],
            ["04:30 PM", "Kundala Lake", "Relax near the scenic lake."],
            ["06:30 PM", "Tea Museum", "Learn about Munnar's tea history."],

            ["08:00 AM", "Top Station", "Enjoy panoramic mountain views."],
            ["11:00 AM", "Eravikulam National Park", "Explore the famous national park."],
            ["03:00 PM", "Attukad Waterfalls", "Visit the scenic waterfall."],
            ["05:30 PM", "Pothamedu View Point", "Enjoy mountain and tea plantation views."]
        ]
    },


    "Kochi": {
        state: "Kerala",
        country: "India",

        places: [
            ["08:00 AM", "Fort Kochi", "Explore the historic Fort Kochi area."],
            ["10:00 AM", "Chinese Fishing Nets", "See the famous fishing nets."],
            ["12:30 PM", "Kerala Lunch", "Enjoy traditional Kerala food."],
            ["02:30 PM", "Mattancherry Palace", "Explore the historic palace."],
            ["04:30 PM", "Jew Town", "Walk through the historic market area."],
            ["06:30 PM", "Marine Drive", "Enjoy the evening waterfront."],

            ["08:00 AM", "St. Francis Church", "Visit the historic church in Fort Kochi."],
            ["10:30 AM", "Paradesi Synagogue", "Explore the historic synagogue area."],
            ["03:00 PM", "Kerala Folklore Museum", "Explore Kerala's cultural heritage."],
            ["05:30 PM", "Bolgatty Palace", "Visit the historic palace area."]
        ]
    },


    "New Delhi": {
        state: "Delhi",
        country: "India",

        places: [
            ["08:00 AM", "India Gate", "Visit the iconic India Gate."],
            ["10:00 AM", "Humayun's Tomb", "Explore the historic monument."],
            ["12:30 PM", "Lunch", "Enjoy North Indian cuisine."],
            ["02:30 PM", "Qutub Minar", "Visit the UNESCO World Heritage Site."],
            ["05:00 PM", "Lotus Temple", "Visit the famous Lotus-shaped temple."],
            ["07:30 PM", "Connaught Place", "Explore the central market area."],

            ["08:00 AM", "Red Fort", "Explore the historic Mughal fort."],
            ["10:30 AM", "Jama Masjid", "Visit the historic mosque."],
            ["03:00 PM", "Akshardham Temple", "Explore the famous temple complex."],
            ["05:30 PM", "Lodhi Garden", "Enjoy an evening walk through the historic gardens."]
        ]
    },


    "Agra": {
        state: "Uttar Pradesh",
        country: "India",

        places: [
            ["07:00 AM", "Taj Mahal", "Visit the iconic Taj Mahal."],
            ["10:00 AM", "Agra Fort", "Explore the historic Mughal fort."],
            ["12:30 PM", "Lunch", "Enjoy local Mughlai cuisine."],
            ["02:30 PM", "Mehtab Bagh", "Enjoy views of the Taj Mahal."],
            ["05:00 PM", "Local Market", "Explore Agra's local handicrafts."],
            ["07:30 PM", "Dinner", "Enjoy dinner at a local restaurant."],

            ["08:00 AM", "Itmad-ud-Daulah", "Visit the historic Mughal tomb."],
            ["11:00 AM", "Akbar's Tomb", "Explore the historic tomb complex at Sikandra."],
            ["03:00 PM", "Mughal Heritage Walk", "Explore the historic neighbourhoods and heritage area."]
        ]
    },


    "Varanasi": {
        state: "Uttar Pradesh",
        country: "India",

        places: [
            ["06:00 AM", "Dashashwamedh Ghat", "Experience the morning atmosphere at the Ganges."],
            ["08:30 AM", "Kashi Vishwanath Temple Area", "Explore the historic temple area."],
            ["11:00 AM", "Sarnath", "Visit the important Buddhist site."],
            ["01:30 PM", "Lunch", "Enjoy local Banarasi food."],
            ["04:30 PM", "Assi Ghat", "Relax beside the Ganges."],
            ["06:30 PM", "Ganga Aarti", "Experience the evening Ganga Aarti."],

            ["06:00 AM", "Manikarnika Ghat", "Explore the historic riverside ghat area respectfully."],
            ["09:00 AM", "Banaras Hindu University", "Explore the historic university campus area."],
            ["03:00 PM", "Ramnagar Fort", "Visit the historic fort across the Ganges."],
            ["05:30 PM", "Tulsi Ghat", "Enjoy the peaceful riverside atmosphere."]
        ]
    },


    "Kolkata": {
        state: "West Bengal",
        country: "India",

        places: [
            ["08:00 AM", "Victoria Memorial", "Explore the famous monument."],
            ["10:30 AM", "Howrah Bridge", "Visit Kolkata's iconic bridge."],
            ["12:30 PM", "Lunch", "Enjoy Bengali cuisine."],
            ["02:30 PM", "Indian Museum", "Explore one of India's oldest museums."],
            ["05:00 PM", "Park Street", "Explore the popular city area."],
            ["07:30 PM", "Prinsep Ghat", "Enjoy the evening riverside."],

            ["08:00 AM", "St. Paul's Cathedral", "Visit the historic cathedral."],
            ["10:30 AM", "Marble Palace", "Explore the historic mansion and collection."],
            ["03:00 PM", "Birla Planetarium", "Visit the famous planetarium."],
            ["05:30 PM", "Kalighat Temple", "Visit the historic temple area."]
        ]
    },


    "Bengaluru": {
        state: "Karnataka",
        country: "India",

        places: [
            ["08:00 AM", "Bangalore Palace", "Explore the historic palace."],
            ["10:30 AM", "Cubbon Park", "Relax in the city park."],
            ["12:30 PM", "Lunch", "Enjoy South Indian food."],
            ["02:30 PM", "Vidhana Soudha", "See the famous government building."],
            ["04:30 PM", "Lalbagh Botanical Garden", "Explore the botanical garden."],
            ["07:00 PM", "MG Road", "Enjoy the evening city atmosphere."],

            ["08:00 AM", "ISKCON Temple Bengaluru", "Visit the famous temple complex."],
            ["10:30 AM", "Tipu Sultan's Summer Palace", "Explore the historic palace."],
            ["03:00 PM", "Ulsoor Lake", "Enjoy the lake area."],
            ["05:30 PM", "Commercial Street", "Explore the popular shopping area."]
        ]
    },


    "Hyderabad": {
        state: "Telangana",
        country: "India",

        places: [
            ["08:00 AM", "Charminar", "Visit Hyderabad's iconic monument."],
            ["10:00 AM", "Mecca Masjid Area", "Explore the historic area."],
            ["12:30 PM", "Hyderabadi Lunch", "Enjoy famous local cuisine."],
            ["02:30 PM", "Golconda Fort", "Explore the historic fort."],
            ["05:30 PM", "Hussain Sagar Lake", "Enjoy the lake area."],
            ["07:30 PM", "Local Market", "Explore Hyderabad's markets."],

            ["08:00 AM", "Salar Jung Museum", "Explore one of India's major museums."],
            ["11:00 AM", "Chowmahalla Palace", "Visit the historic palace complex."],
            ["03:00 PM", "Qutb Shahi Tombs", "Explore the historic tomb complex."],
            ["05:30 PM", "Durgam Cheruvu", "Enjoy the scenic lake area."]
        ]
    },


    "Dubai": {
        country: "United Arab Emirates",
        currency: "AED",
        rate: 23,

        places: [
            ["09:00 AM", "Burj Khalifa", "Visit Downtown Dubai and the Burj Khalifa area."],
            ["11:30 AM", "Dubai Mall", "Explore one of the world's famous shopping malls."],
            ["01:30 PM", "Lunch", "Enjoy lunch at a local restaurant."],
            ["03:30 PM", "Dubai Marina", "Explore the Marina waterfront."],
            ["05:30 PM", "Jumeirah Beach", "Relax and enjoy views of the coastline."],
            ["08:00 PM", "Dubai Fountain", "Enjoy the evening fountain area."],

            ["09:00 AM", "Palm Jumeirah", "Explore Dubai's famous man-made island."],
            ["11:30 AM", "Atlantis The Palm", "Visit the famous resort area."],
            ["03:30 PM", "Dubai Frame", "Visit the iconic Dubai Frame."],
            ["05:30 PM", "Al Fahidi Historical District", "Explore old Dubai and its heritage streets."]
        ]
    },


    "Abu Dhabi": {
        country: "United Arab Emirates",
        currency: "AED",
        rate: 23,

        places: [
            ["09:00 AM", "Sheikh Zayed Grand Mosque", "Visit the magnificent mosque."],
            ["11:30 AM", "Qasr Al Watan", "Explore the presidential palace."],
            ["01:30 PM", "Lunch", "Enjoy local and international food."],
            ["03:30 PM", "Corniche", "Enjoy the Abu Dhabi waterfront."],
            ["05:30 PM", "Louvre Abu Dhabi", "Explore the famous museum."],
            ["08:00 PM", "Yas Island", "Enjoy the evening at Yas Island."],

            ["09:00 AM", "Qasr Al Hosn", "Explore Abu Dhabi's historic landmark."],
            ["11:30 AM", "Saadiyat Island", "Explore the cultural district."],
            ["03:30 PM", "Heritage Village", "Explore the traditional heritage area."],
            ["05:30 PM", "Yas Marina", "Enjoy the waterfront and evening atmosphere."]
        ]
    },


    "Gandhinagar": {
    places: [
        [
            "09:00 AM",
            "Akshardham Temple",
            "Visit the famous Swaminarayan Akshardham temple and explore its beautiful architecture and gardens."
        ],
        [
            "11:30 AM",
            "Dandi Kutir Museum",
            "Explore the museum dedicated to Mahatma Gandhi and the Dandi March."
        ],
        [
            "02:00 PM",
            "Indroda Nature Park",
            "Explore dinosaur fossils, replicas and the nature park."
        ],
        [
            "04:00 PM",
            "Sarita Udyan",
            "Relax and enjoy the green surroundings."
        ],
        [
            "05:30 PM",
            "Mahatma Mandir",
            "See the convention centre and its distinctive architecture."
        ],
        [
            "09:00 AM",
            "Adalaj Stepwell",
            "Explore the historic stepwell and its intricate stone carvings."
        ],
        [
            "11:30 AM",
            "Adalaj Trimandir",
            "Visit the well-known temple complex near Adalaj."
        ],
        [
            "02:00 PM",
            "Sant Sarovar Dam",
            "Enjoy the scenic surroundings near the water."
        ],
        [
            "04:00 PM",
            "Children's Park, Sector 28",
            "Enjoy a relaxing visit to the local park."
        ],
        [
            "05:30 PM",
            "Akshardham Gardens",
            "Explore the landscaped gardens around Akshardham."
        ]
    ]
},




    "Bangkok": {
        country: "Thailand",
        currency: "THB",
        rate: 0.42,

        places: [
            ["08:00 AM", "Grand Palace", "Visit Bangkok's famous royal complex."],
            ["10:30 AM", "Wat Pho", "Explore the historic temple."],
            ["12:30 PM", "Thai Lunch", "Enjoy authentic Thai cuisine."],
            ["02:30 PM", "Wat Arun", "Visit the famous riverside temple."],
            ["05:00 PM", "Chao Phraya River", "Enjoy the riverside area."],
            ["07:30 PM", "Night Market", "Explore Bangkok's evening market."],

            ["08:00 AM", "Chatuchak Weekend Market", "Explore the huge local market when open."],
            ["10:30 AM", "Lumphini Park", "Enjoy a peaceful city park."],
            ["03:00 PM", "Jim Thompson House", "Explore the historic house museum."],
            ["05:30 PM", "Asiatique The Riverfront", "Enjoy the riverside shopping and entertainment area."]
        ]
    },


    "Singapore": {
        country: "Singapore",
        currency: "SGD",
        rate: 65,

        places: [
            ["09:00 AM", "Gardens by the Bay", "Explore the famous gardens."],
            ["11:30 AM", "Marina Bay Sands", "Visit the Marina Bay area."],
            ["01:30 PM", "Lunch", "Enjoy Singaporean food."],
            ["03:00 PM", "Merlion Park", "Visit Singapore's famous Merlion."],
            ["05:00 PM", "Sentosa Island", "Explore Sentosa."],
            ["08:00 PM", "Clarke Quay", "Enjoy the evening waterfront."],

            ["09:00 AM", "Singapore Botanic Gardens", "Explore the UNESCO-listed gardens."],
            ["11:30 AM", "Chinatown", "Explore Singapore's historic Chinatown."],
            ["03:00 PM", "Little India", "Explore the colourful cultural district."],
            ["05:30 PM", "Orchard Road", "Explore Singapore's famous shopping street."]
        ]
    },


    "London": {
        country: "United Kingdom",
        currency: "GBP",
        rate: 112,

        places: [
            ["09:00 AM", "Big Ben", "Visit the famous London landmark."],
            ["10:30 AM", "Westminster Abbey", "Explore the historic abbey."],
            ["12:30 PM", "Lunch", "Enjoy lunch in central London."],
            ["02:00 PM", "Buckingham Palace", "Visit the famous royal residence area."],
            ["04:00 PM", "Tower Bridge", "Explore London's famous bridge."],
            ["06:30 PM", "London Eye", "Enjoy city views."],

            ["09:00 AM", "Tower of London", "Explore the historic fortress."],
            ["11:30 AM", "St Paul's Cathedral", "Visit the famous cathedral."],
            ["03:00 PM", "British Museum", "Explore the world-famous museum."],
            ["05:30 PM", "Hyde Park", "Relax in one of London's major parks."]
        ]
    }

};


/* =========================================================
   TRANSLATIONS
========================================================= */

const translations = {

    en: {

        navFeatures: "Features",
        navDestinations: "Destinations",
        navPlanner: "Planner",

        plannerTitle: "Create Your Trip",
        plannerText:
            "Enter your journey details and generate your complete plan.",

        footer:
            "AI-powered travel planning for smarter journeys."

    },


    hi: {

        navFeatures: "फीचर्स",
        navDestinations: "डेस्टिनेशन",
        navPlanner: "प्लानर",

        plannerTitle: "अपनी यात्रा बनाएं",
        plannerText:
            "अपनी यात्रा की जानकारी दें और पूरा ट्रैवल प्लान बनाएं।",

        footer:
            "स्मार्ट यात्रा के लिए AI आधारित ट्रैवल प्लानिंग।"

    },


    gu: {

        navFeatures: "ફીચર્સ",
        navDestinations: "ડેસ્ટિનેશન",
        navPlanner: "પ્લાનર",

        plannerTitle: "તમારી ટ્રિપ બનાવો",
        plannerText:
            "તમારી મુસાફરીની માહિતી આપો અને સંપૂર્ણ ટ્રાવેલ પ્લાન બનાવો.",

        footer:
            "સ્માર્ટ મુસાફરી માટે AI આધારિત ટ્રાવેલ પ્લાનિંગ."

    }

};


/* =========================================================
   HELPER
========================================================= */

function getElement(id) {

    return document.getElementById(id);

}


function normalize(value) {

    return String(value || "")
        .trim()
        .toLowerCase();

}


/* =========================================================
   GET ALL VALID CITIES
========================================================= */

function getAllIndiaCities() {

    return [
        ...new Set(
            Object.values(indiaDestinations).flat()
        )
    ];

}


function getAllInternationalCities() {

    return [
        ...new Set(
            Object.values(internationalDestinations).flat()
        )
    ];

}


function getAllValidCities() {

    return [
        ...new Set([
            ...getAllIndiaCities(),
            ...getAllInternationalCities()
        ])
    ];

}


/* =========================================================
   VALIDATE FROM CITY
========================================================= */

function isValidFromCity(city) {

    const entered = normalize(city);

    if (!entered) {
        return false;
    }

    const validCities = getAllValidCities();

    return validCities.some(function(validCity) {

        return normalize(validCity) === entered;

    });

}


/* =========================================================
   GET CANONICAL CITY NAME
========================================================= */

function getCanonicalCityName(city) {

    const entered = normalize(city);

    const validCities = getAllValidCities();

    const found = validCities.find(function(validCity) {

        return normalize(validCity) === entered;

    });

    return found || "";

}


/* =========================================================
   INDIA STATE → CITY
========================================================= */

function setupIndiaCityDropdown() {
    const stateSelect = getElement("indiaState");
    const citySelect = getElement("indiaCity");
    if (!stateSelect || !citySelect) return;

    // Keep City and District as two separate selectors.
    let districtSelect = getElement("indiaDistrict");
    if (!districtSelect) {
        districtSelect = document.createElement("select");
        districtSelect.id = "indiaDistrict";
        districtSelect.name = "indiaDistrict";
        districtSelect.className = citySelect.className;
        districtSelect.disabled = true;
        districtSelect.setAttribute("aria-label", "Select District");
        districtSelect.innerHTML = '<option value="">Select District (optional)</option>';
        const wrapper = citySelect.parentElement;
        if (wrapper && wrapper.parentElement) {
            wrapper.parentElement.insertBefore(districtSelect, wrapper.nextSibling);
        } else {
            citySelect.insertAdjacentElement("afterend", districtSelect);
        }
    }

    // Populate all 28 States and 8 Union Territories without removing City.
    const allStates = Object.keys(indiaDistricts);
    const currentState = stateSelect.value;
    stateSelect.innerHTML = '<option value="">Select State / Union Territory</option>';
    allStates.forEach(function(state) {
        const option = document.createElement("option");
        option.value = state;
        option.textContent = state;
        stateSelect.appendChild(option);
    });
    if (allStates.includes(currentState)) stateSelect.value = currentState;

    function fillSelect(select, placeholder, items) {
        select.innerHTML = "";
        const first = document.createElement("option");
        first.value = "";
        first.textContent = placeholder;
        select.appendChild(first);
        (items || []).forEach(function(item) {
            const option = document.createElement("option");
            option.value = item;
            option.textContent = item;
            select.appendChild(option);
        });
        select.disabled = !(items && items.length);
    }

    function updateLocationOptions() {
        const state = stateSelect.value;
        fillSelect(citySelect, "Select City (optional)", indiaDestinations[state] || []);
        fillSelect(districtSelect, "Select District (optional)", indiaDistricts[state] || []);
        updateIndiaLocationInfo();
    }

    stateSelect.addEventListener("change", updateLocationOptions);
    citySelect.addEventListener("change", function() {
        if (citySelect.value) districtSelect.value = "";
        updateIndiaLocationInfo();
    });
    districtSelect.addEventListener("change", function() {
        if (districtSelect.value) citySelect.value = "";
        updateIndiaLocationInfo();
    });

    updateLocationOptions();
}


/* =========================================================
   DISTRICT SIGHTSEEING
========================================================= */
const districtSightseeing = {
    "Ahmedabad": ["Sabarmati Ashram", "Adalaj Stepwell", "Kankaria Lake", "Sabarmati Riverfront", "Sidi Saiyyed Mosque"],
    "Bhavnagar": ["Takhteshwar Temple", "Victoria Park", "Gaurishankar Lake", "Blackbuck National Park, Velavadar"],
    "Vadodara": ["Laxmi Vilas Palace", "Sayaji Garden", "Baroda Museum", "Kirti Mandir"],
    "Surat": ["Dumas Beach", "Dutch Garden", "Sarthana Nature Park", "Surat Castle"],
    "Rajkot": ["Watson Museum", "Kaba Gandhi No Delo", "Aji Dam", "Rotary Dolls Museum"],
    "Amritsar": ["Golden Temple", "Jallianwala Bagh", "Partition Museum", "Gobindgarh Fort"],
    "Agra": ["Taj Mahal", "Agra Fort", "Mehtab Bagh", "Itmad-ud-Daulah"],
    "Varanasi": ["Dashashwamedh Ghat", "Kashi Vishwanath Temple", "Assi Ghat", "Sarnath"],
    "Jaipur": ["Amber Fort", "Hawa Mahal", "City Palace", "Jantar Mantar"],
    "Jodhpur": ["Mehrangarh Fort", "Jaswant Thada", "Umaid Bhawan Palace", "Clock Tower Market"],
    "Udaipur": ["City Palace", "Lake Pichola", "Jagdish Temple", "Saheliyon Ki Bari"],
    "Mumbai": ["Gateway of India", "Marine Drive", "Elephanta Caves", "Chhatrapati Shivaji Maharaj Terminus"],
    "Pune": ["Shaniwar Wada", "Aga Khan Palace", "Sinhagad Fort", "Dagdusheth Halwai Ganpati Temple"],
    "Nashik": ["Trimbakeshwar Temple", "Pandav Leni", "Sula Vineyards", "Ramkund"],
    "Kolkata": ["Victoria Memorial", "Howrah Bridge", "Indian Museum", "Dakshineswar Kali Temple"],
    "Darjeeling": ["Tiger Hill", "Batasia Loop", "Darjeeling Himalayan Railway", "Peace Pagoda"],
    "Chennai": ["Marina Beach", "Kapaleeshwarar Temple", "Fort St. George", "Government Museum"],
    "Mysuru": ["Mysore Palace", "Chamundi Hill", "Brindavan Gardens", "St. Philomena's Church"],
    "Bengaluru": ["Bangalore Palace", "Lalbagh Botanical Garden", "Cubbon Park", "Vidhana Soudha"],
    "Hyderabad": ["Charminar", "Golconda Fort", "Salar Jung Museum", "Chowmahalla Palace"],
    "Leh": ["Leh Palace", "Shanti Stupa", "Thiksey Monastery", "Hall of Fame"],
    "Kargil": ["Kargil War Memorial", "Mulbekh Monastery", "Suru Valley", "Hunderman Village"],
    "Panaji": ["Fontainhas", "Dona Paula", "Miramar Beach", "Reis Magos Fort"],
    "North Goa": ["Fort Aguada", "Baga Beach", "Calangute Beach", "Chapora Fort"],
    "South Goa": ["Colva Beach", "Palolem Beach", "Cabo de Rama Fort", "Benaulim Beach"],
    "Dehradun": ["Robber's Cave", "Sahastradhara", "Forest Research Institute", "Tapkeshwar Temple"],
    "Rishikesh": ["Ram Jhula", "Triveni Ghat", "Beatles Ashram", "Neer Garh Waterfall"],
    "Kochi": ["Fort Kochi", "Chinese Fishing Nets", "Mattancherry Palace", "Jew Town"],
    "Munnar": ["Tea Gardens", "Mattupetty Dam", "Eravikulam National Park", "Top Station"],
    "Lucknow": ["Bara Imambara", "Chota Imambara", "Rumi Darwaza", "Hazratganj"],
    "Ayodhya": ["Ram Janmabhoomi", "Hanuman Garhi", "Kanak Bhawan", "Saryu Ghat"],
    "Prayagraj": ["Triveni Sangam", "Anand Bhavan", "Allahabad Fort", "Khusro Bagh"],
    "Patna": ["Golghar", "Bihar Museum", "Takht Sri Patna Sahib", "Kumhrar"],
    "Bhopal": ["Upper Lake", "Van Vihar National Park", "Taj-ul-Masajid", "State Museum"],
    "Indore": ["Rajwada Palace", "Lal Bagh Palace", "Sarafa Bazaar", "Annapurna Temple"],
    "Visakhapatnam": ["RK Beach", "Kailasagiri", "Submarine Museum", "Simhachalam Temple"],
    "Bhubaneswar": ["Lingaraj Temple", "Udayagiri and Khandagiri Caves", "Dhauli Shanti Stupa", "Nandankanan Zoo"],
    "Puri": ["Jagannath Temple", "Puri Beach", "Gundicha Temple", "Raghurajpur Heritage Village"],
    "Shillong": ["Umiam Lake", "Elephant Falls", "Shillong Peak", "Ward's Lake"],
    "Gangtok": ["MG Marg", "Tsomgo Lake", "Rumtek Monastery", "Hanuman Tok"],
    "Port Blair": ["Cellular Jail", "Corbyn's Cove", "Chidiya Tapu", "Ross Island"],
    "Puducherry": ["Promenade Beach", "Auroville", "Sri Aurobindo Ashram", "French Quarter"],
    "Silvassa": ["Vanganga Lake Garden", "Dudhni Lake", "Tribal Cultural Museum", "Dadra Garden"],
    "Daman": ["Jampore Beach", "Devka Beach", "Moti Daman Fort", "Dominican Monastery"],
    "Diu": ["Diu Fort", "Nagoa Beach", "Naida Caves", "Gangeshwar Temple"],
    "New Delhi": ["India Gate", "Qutub Minar", "Humayun's Tomb", "Red Fort"],
    "Srinagar": ["Dal Lake", "Mughal Gardens", "Shankaracharya Temple", "Hazratbal Shrine"],
    "Jammu": ["Raghunath Temple", "Bahu Fort", "Mubarak Mandi Palace", "Amar Mahal Museum"],
    "Ranchi": ["Hundru Falls", "Rock Garden", "Tagore Hill", "Dassam Falls"],
    "Coimbatore": ["Marudhamalai Temple", "Perur Pateeswarar Temple", "VOC Park", "Siruvani Waterfalls"],
    "Madurai": ["Meenakshi Amman Temple", "Thirumalai Nayakkar Palace", "Gandhi Memorial Museum", "Vandiyur Mariamman Teppakulam"],
    "Vijayawada": ["Kanaka Durga Temple", "Prakasam Barrage", "Undavalli Caves", "Bhavani Island"],
    "Chandigarh": ["Rock Garden", "Sukhna Lake", "Rose Garden", "Capitol Complex"],
    "Agartala": ["Ujjayanta Palace", "Neermahal", "Tripura Sundari Temple", "Heritage Park"],
    "Imphal": ["Kangla Fort", "Loktak Lake", "INA Memorial", "Manipur State Museum"],
    "Ziro": ["Ziro Valley", "Talley Valley Wildlife Sanctuary", "Meghna Cave Temple", "Pine Grove"]
};


/* =========================================================
   INTERNATIONAL COUNTRY → CITY
========================================================= */

function setupInternationalCityDropdown() {

    const countrySelect =
        getElement("internationalCountry");

    const citySelect =
        getElement("internationalCity");

    if (!countrySelect || !citySelect) {
        return;
    }


    countrySelect.addEventListener(
        "change",
        function() {

            const country =
                countrySelect.value;

            citySelect.innerHTML =
                `<option value="">Select City</option>`;

            citySelect.disabled =
                true;


            if (
                !country ||
                !internationalDestinations[country]
            ) {

                updateInternationalLocationInfo();

                return;

            }


            internationalDestinations[country]
                .forEach(function(city) {

                    const option =
                        document.createElement("option");

                    option.value =
                        city;

                    option.textContent =
                        city;

                    citySelect.appendChild(
                        option
                    );

                });


            citySelect.disabled =
                false;

            updateInternationalLocationInfo();

        }
    );


    citySelect.addEventListener(
        "change",
        updateInternationalLocationInfo
    );

}


/* =========================================================
   LOCATION INFO
========================================================= */

function updateIndiaLocationInfo() {
    const state = getElement("indiaState");
    const city = getElement("indiaCity");
    const district = getElement("indiaDistrict");
    const info = getElement("indiaLocationInfo") || getElement("indiaDestinationInfo");
    if (!state || !info) return;
    const selectedPlace = (city && city.value) || (district && district.value) || "";
    info.textContent = selectedPlace && state.value
        ? "📍 " + selectedPlace + ", " + state.value + ", India"
        : "";
}


function updateInternationalLocationInfo() {

    const country =
        getElement("internationalCountry");

    const city =
        getElement("internationalCity");

    const info =
        getElement("internationalLocationInfo");

    if (!country || !city || !info) {
        return;
    }


    if (country.value && city.value) {

        info.innerHTML =
            `📍 ${city.value}, ${country.value}`;

    } else {

        info.innerHTML = "";

    }

}


/* =========================================================
   TRIP TYPE
========================================================= */

function selectTripType(type) {

    selectedTripType =
        type;


    const tripType =
        getElement("tripType");

    if (tripType) {

        tripType.value =
            type;

    }


    const indiaBtn =
        getElement("indiaBtn");

    const internationalBtn =
        getElement("internationalBtn");


    if (indiaBtn) {

        indiaBtn.classList.toggle(
            "active",
            type === "India"
        );

    }


    if (internationalBtn) {

        internationalBtn.classList.toggle(
            "active",
            type === "International"
        );

    }


    const indiaFields =
        getElement("indiaDestinationFields");

    const internationalFields =
        getElement("internationalDestinationFields");


    if (indiaFields) {

        indiaFields.style.display =
            type === "India"
                ? "block"
                : "none";

    }


    if (internationalFields) {

        internationalFields.style.display =
            type === "International"
                ? "block"
                : "none";

    }


    const indiaTransport =
        getElement("indiaTransportSection");

    const internationalTransport =
        getElement("internationalTransportSection");


    if (indiaTransport) {

        indiaTransport.style.display =
            type === "India"
                ? "block"
                : "none";

    }


    if (internationalTransport) {

        internationalTransport.style.display =
            type === "International"
                ? "block"
                : "none";

    }


    if (type === "International") {

        selectedTransport =
            "Flight";

    }


    if (type === "India") {

        selectTransport(
            selectedTransport || "Flight"
        );

    }

}


/* =========================================================
   TRANSPORT
========================================================= */

function selectTransport(type) {

    if (
        selectedTripType !== "India"
    ) {

        selectedTransport =
            "Flight";

        return;

    }


    selectedTransport =
        type;


    document
        .querySelectorAll(
            ".transport-option"
        )
        .forEach(function(option) {

            const transport =
                option.dataset.transport;

            if (!transport) {
                return;
            }


            option.classList.toggle(
                "active",
                transport === type
            );

        });

}


/* =========================================================
   DAYS
========================================================= */

function getTripDays() {

    const departure =
        getElement("departureDate");

    const returnDate =
        getElement("returnDate");


    if (
        departure &&
        returnDate &&
        departure.value &&
        returnDate.value
    ) {

        const start =
            new Date(
                departure.value
            );

        const end =
            new Date(
                returnDate.value
            );


        const difference =
            Math.ceil(
                (
                    end - start
                ) /
                (
                    1000 *
                    60 *
                    60 *
                    24
                )
            ) + 1;


        if (difference > 0) {

            return difference;

        }

    }


    return 5;

}


/* =========================================================
   DESTINATION NAME
========================================================= */

function getSelectedDestination() {
    if (selectedTripType === "India") {
        const city = getElement("indiaCity");
        const district = getElement("indiaDistrict");
        return (city && city.value) || (district && district.value) || "";
    }
    const city = getElement("internationalCity");
    return city ? city.value : "";
}


/* =========================================================
   FROM CITY
========================================================= */

function getFromCity() {

    if (
        selectedTripType === "India"
    ) {

        const input =
            getElement("fromCity");

        return input
            ? input.value.trim()
            : "";

    }


    const input =
        getElement("internationalFrom");

    return input
        ? input.value.trim()
        : "";

}


/* =========================================================
   DESTINATION DATA
========================================================= */

function getDestinationDetails(destination) {

    if (selectedTripType === "India" && districtSightseeing[destination]) {
        return {
            state: (getElement("indiaState") || {}).value || "",
            country: "India",
            currency: "INR",
            rate: 1,
            places: districtSightseeing[destination].map(function(place, index) {
                const times = ["09:00 AM", "11:00 AM", "01:30 PM", "03:30 PM", "05:30 PM"];
                return [times[index % times.length], place, "Visit " + place + " and explore this local attraction. Check current opening hours before travelling."];
            })
        };
    }

    if (
        destinationData[destination]
    ) {

        return destinationData[
            destination
        ];

    }


    
const attractionData = {
    "Ahmedabad": [
        ["09:00 AM", "Sabarmati Ashram", "Visit the historic ashram."],
        ["11:00 AM", "Adalaj Stepwell", "Explore the historic stepwell."],
        ["01:30 PM", "Sidi Saiyyed Mosque", "See the famous stone latticework."],
        ["03:30 PM", "Kankaria Lake", "Enjoy the lakeside attractions."],
        ["05:30 PM", "Atal Bridge", "Enjoy views of the Sabarmati River."]
    ],
    "Vadodara": [
        ["09:00 AM", "Laxmi Vilas Palace", "Explore the royal palace."],
        ["11:00 AM", "Sayaji Baug", "Visit the city's historic garden."],
        ["01:30 PM", "Baroda Museum and Picture Gallery", "Explore art and history."],
        ["03:30 PM", "EME Temple", "Visit the distinctive temple."],
        ["05:30 PM", "Sursagar Lake", "Relax by the lake."]
    ],
    "Surat": [
        ["09:00 AM", "Dumas Beach", "Visit the popular coastal spot."],
        ["11:00 AM", "Dutch Garden", "Explore the historic garden."],
        ["01:30 PM", "Sardar Patel Museum", "Explore local history."],
        ["03:30 PM", "Gopi Talav", "Visit the restored lake area."],
        ["05:30 PM", "Science Centre Surat", "Explore the science exhibits."]
    ],
    "Jaipur": [
        ["09:00 AM", "Amber Fort", "Explore the hilltop fort."],
        ["11:00 AM", "Hawa Mahal", "See Jaipur's famous palace facade."],
        ["01:30 PM", "City Palace", "Explore the royal palace complex."],
        ["03:30 PM", "Jantar Mantar", "Visit the historic observatory."],
        ["05:30 PM", "Jal Mahal", "Enjoy views of the palace on the lake."]
    ],
    "Mumbai": [
        ["09:00 AM", "Gateway of India", "Visit the iconic waterfront monument."],
        ["11:00 AM", "Chhatrapati Shivaji Maharaj Vastu Sangrahalaya", "Explore museum collections."],
        ["01:30 PM", "Marine Drive", "Walk along the famous waterfront."],
        ["03:30 PM", "Siddhivinayak Temple", "Visit the well-known temple."],
        ["05:30 PM", "Juhu Beach", "Enjoy the seaside."]
    ],
    "Delhi": [
        ["09:00 AM", "Red Fort", "Explore the historic fort."],
        ["11:00 AM", "India Gate", "Visit the national war memorial."],
        ["01:30 PM", "Qutub Minar", "Explore the historic monument."],
        ["03:30 PM", "Humayun's Tomb", "Visit the garden tomb."],
        ["05:30 PM", "Connaught Place", "Explore the central shopping district."]
    ],
    "Agra": [
        ["08:00 AM", "Taj Mahal", "Visit the famous marble mausoleum."],
        ["11:00 AM", "Agra Fort", "Explore the historic Mughal fort."],
        ["01:30 PM", "Itmad-ud-Daula", "Visit the historic marble tomb."],
        ["03:30 PM", "Mehtab Bagh", "Enjoy views of the Taj Mahal."],
        ["05:30 PM", "Sadar Bazaar", "Explore the local market."]
    ],
    "Udaipur": [
        ["09:00 AM", "City Palace", "Explore the palace complex."],
        ["11:00 AM", "Lake Pichola", "Enjoy the lake views."],
        ["01:30 PM", "Saheliyon-ki-Bari", "Visit the historic garden."],
        ["03:30 PM", "Jag Mandir", "Explore the island palace if accessible."],
        ["05:30 PM", "Fateh Sagar Lake", "Enjoy the lakeside scenery."]
    ],
    "Manali": [
        ["09:00 AM", "Hadimba Devi Temple", "Visit the forest temple."],
        ["11:00 AM", "Old Manali", "Explore the village lanes."],
        ["01:30 PM", "Vashisht Temple", "Visit the temple and nearby springs."],
        ["03:30 PM", "Solang Valley", "Enjoy mountain scenery, weather permitting."],
        ["05:30 PM", "Mall Road Manali", "Explore the central market area."]
    ],
    "Shimla": [
        ["09:00 AM", "The Ridge", "Enjoy views over Shimla."],
        ["11:00 AM", "Christ Church", "Visit the historic church."],
        ["01:30 PM", "Jakhoo Temple", "Visit the hilltop temple."],
        ["03:30 PM", "Mall Road", "Explore the pedestrian shopping street."],
        ["05:30 PM", "Scandal Point", "Enjoy the town's central viewpoint."]
    ],
    "Goa": [
        ["09:00 AM", "Basilica of Bom Jesus", "Visit the historic church in Old Goa."],
        ["11:00 AM", "Fort Aguada", "Explore the Portuguese-era fort."],
        ["01:30 PM", "Calangute Beach", "Enjoy the North Goa coastline."],
        ["03:30 PM", "Chapora Fort", "Enjoy the coastal views."],
        ["05:30 PM", "Baga Beach", "Relax by the sea."]
    ],
    "Dubai": [
        ["09:00 AM", "Burj Khalifa", "Visit the landmark; tickets may be required."],
        ["11:00 AM", "Dubai Mall", "Explore the shopping and entertainment complex."],
        ["01:30 PM", "Museum of the Future", "Visit if tickets are available."],
        ["03:30 PM", "Dubai Marina", "Explore the waterfront district."],
        ["05:30 PM", "Jumeirah Beach", "Enjoy views of the coast."]
    ],
    "Singapore": [
        ["09:00 AM", "Gardens by the Bay", "Explore the waterfront gardens."],
        ["11:00 AM", "Merlion Park", "See the famous Merlion statue."],
        ["01:30 PM", "Chinatown", "Explore the historic neighbourhood."],
        ["03:30 PM", "Marina Bay Sands", "Explore the Marina Bay area."],
        ["05:30 PM", "Clarke Quay", "Enjoy the riverside district."]
    ],
    "London": [
        ["09:00 AM", "Tower of London", "Explore the historic fortress."],
        ["11:00 AM", "Tower Bridge", "Visit the famous bridge."],
        ["01:30 PM", "British Museum", "Explore the museum collections."],
        ["03:30 PM", "Buckingham Palace", "See the palace exterior."],
        ["05:30 PM", "Trafalgar Square", "Visit the famous central square."]
    ],
    "Bangkok": [
        ["09:00 AM", "Grand Palace", "Explore the royal palace complex."],
        ["11:00 AM", "Wat Pho", "Visit the famous temple."],
        ["01:30 PM", "Wat Arun", "Explore the Temple of Dawn."],
        ["03:30 PM", "Yaowarat Road", "Explore Bangkok's Chinatown."],
        ["05:30 PM", "Asiatique The Riverfront", "Visit the riverside shopping area."]
    ]
};

const places = attractionData[destination];

if (places) {
    return {
        state: "",
        country: selectedTripType === "India" ? "India" : "",
        currency: selectedTripType === "India" ? "INR" : "USD",
        rate: selectedTripType === "India" ? 1 : 84,
        places: places
    };
}

return {
    state: "",
    country: selectedTripType === "India" ? "India" : "",
    currency: selectedTripType === "India" ? "INR" : "USD",
    rate: selectedTripType === "India" ? 1 : 84,
    places: [
        ["09:00 AM", "Breakfast", `Have breakfast in ${destination}.`],
        ["11:00 AM", `${destination} city centre`, `Explore the central area of ${destination}.`],
        ["01:30 PM", "Lunch break", `Enjoy lunch in ${destination}.`],
        ["03:30 PM", `${destination} local market`, `Explore a local market in ${destination}.`],
        ["05:30 PM", "Evening walk", `Enjoy an evening walk in ${destination}.`]
    ]
};

}


/* =========================================================
   TRANSPORT COST
========================================================= */

function calculateTransportCost(
    from,
    destination,
    transport,
    travelers
) {

    const f =
        normalize(from);

    const d =
        normalize(destination);


    /* =====================================================
       SPECIAL BHAVNAGAR → GOA FLIGHT
    ====================================================== */

    if (
        selectedTripType === "India" &&
        transport === "Flight" &&
        f.includes("bhavnagar") &&
        (
            d.includes("goa") ||
            d.includes("panaji") ||
            d.includes("calangute") ||
            d.includes("baga")
        )
    ) {

        const bhavnagarAhmedabad =
            900;

        const ahmedabadAirportTransfer =
            600;

        const flight =
            4500;

        return (
            bhavnagarAhmedabad +
            ahmedabadAirportTransfer +
            flight
        ) * travelers;

    }


    if (
        selectedTripType === "India"
    ) {

        const prices = {

            Car: 3000,

            Bus: 1400,

            Train: 1800,

            Flight: 5000

        };


        return (
            prices[transport] || 2500
        ) * travelers;

    }


    const internationalFlights = {

        "Dubai": 18000,
        "Abu Dhabi": 19000,
        "Bangkok": 22000,
        "Singapore": 25000,
        "London": 55000,
        "Paris": 60000,
        "Rome": 58000,
        "Tokyo": 50000,
        "Sydney": 50000

    };


    return (
        internationalFlights[
            destination
        ] || 30000
    ) * travelers;

}


/* =========================================================
   DAILY COST
========================================================= */

function calculateDailyCosts(
    destination,
    travelers,
    days,
    style
) {

    let hotelPerDay = 1800;

    let foodPerDay = 700;

    let activityPerDay = 700;


    if (style === "Budget") {

        hotelPerDay = 1000;

        foodPerDay = 450;

        activityPerDay = 350;

    }


    if (style === "Balanced") {

        hotelPerDay = 1800;

        foodPerDay = 700;

        activityPerDay = 700;

    }


    if (style === "Adventure") {

        hotelPerDay = 1700;

        foodPerDay = 650;

        activityPerDay = 1200;

    }


    if (style === "Family") {

        hotelPerDay = 2500;

        foodPerDay = 900;

        activityPerDay = 700;

    }


    if (style === "Luxury") {

        hotelPerDay = 5000;

        foodPerDay = 1800;

        activityPerDay = 1800;

    }


    if (
        selectedTripType === "International"
    ) {

        hotelPerDay = 3500;

        foodPerDay = 1500;

        activityPerDay = 2000;

    }


    return {

        hotel:
            hotelPerDay *
            travelers *
            days,

        food:
            foodPerDay *
            travelers *
            days,

        activities:
            activityPerDay *
            travelers *
            days

    };

}


/* =========================================================
   ROUTE CREATOR
========================================================= */

function createRoute(
    from,
    destination,
    transport
) {

    const f =
        normalize(from);

    const d =
        normalize(destination);


    /* =====================================================
       BHAVNAGAR → GOA FLIGHT
    ====================================================== */

    if (
        selectedTripType === "India" &&
        transport === "Flight" &&
        f.includes("bhavnagar") &&
        (
            d.includes("goa") ||
            d.includes("panaji") ||
            d.includes("calangute") ||
            d.includes("baga")
        )
    ) {

        return [

            {
                icon: "🚌",
                title:
                    "Bhavnagar → Ahmedabad",
                description:
                    "Take an intercity bus or suitable ground transfer from Bhavnagar to Ahmedabad."
            },

            {
                icon: "🚕",
                title:
                    "Ahmedabad Bus Stand → Ahmedabad Airport",
                description:
                    "Take a cab or local transfer from the bus stand to Sardar Vallabhbhai Patel International Airport."
            },

            {
                icon: "✈️",
                title:
                    "Ahmedabad → Goa",
                description:
                    "Take a domestic flight from Ahmedabad to Goa."
            },

            {
                icon: "🚕",
                title:
                    "Goa Airport → Hotel",
                description:
                    "Take a taxi or app cab from Goa Airport to your hotel."
            }

        ];

    }


    /* =====================================================
       BHAVNAGAR → GOA TRAIN
    ====================================================== */

    if (
        selectedTripType === "India" &&
        transport === "Train" &&
        f.includes("bhavnagar") &&
        (
            d.includes("goa") ||
            d.includes("panaji")
        )
    ) {

        return [

            {
                icon: "🚕",
                title:
                    "Bhavnagar → Railway Station",
                description:
                    "Reach the suitable railway station for your confirmed train."
            },

            {
                icon: "🚆",
                title:
                    "Bhavnagar Region → Goa Region",
                description:
                    "Travel by train using the available railway connection toward Goa."
            },

            {
                icon: "🚕",
                title:
                    "Railway Station → Hotel",
                description:
                    "Take a local taxi or cab to your hotel."
            }

        ];

    }


    /* =====================================================
       BUS
    ====================================================== */

    if (
        selectedTripType === "India" &&
        transport === "Bus"
    ) {

        return [

            {
                icon: "🚕",
                title:
                    `${from} → Bus Boarding Point`,
                description:
                    "Reach the appropriate intercity bus boarding point."
            },

            {
                icon: "🚌",
                title:
                    `${from} → ${destination}`,
                description:
                    "Travel by intercity bus toward your selected destination."
            },

            {
                icon: "🚕",
                title:
                    `${destination} Bus Stand → Hotel`,
                description:
                    "Take a local taxi, auto or app cab to your hotel."
            }

        ];

    }


    /* =====================================================
       TRAIN
    ====================================================== */

    if (
        selectedTripType === "India" &&
        transport === "Train"
    ) {

        return [

            {
                icon: "🚕",
                title:
                    `${from} → Railway Station`,
                description:
                    "Reach the nearest suitable railway station."
            },

            {
                icon: "🚆",
                title:
                    `${from} → ${destination} Region`,
                description:
                    "Travel by the selected railway route."
            },

            {
                icon: "🚕",
                title:
                    `Station → ${destination} Hotel`,
                description:
                    "Take local transport to your accommodation."
            }

        ];

    }


    /* =====================================================
       CAR
    ====================================================== */

    if (
        selectedTripType === "India" &&
        transport === "Car"
    ) {

        return [

            {
                icon: "🚗",
                title:
                    `${from} → ${destination}`,
                description:
                    "Travel by road with planned breaks and rest stops."
            },

            {
                icon: "🏨",
                title:
                    `${destination} → Hotel`,
                description:
                    "Complete hotel check-in after reaching the destination."
            }

        ];

    }


    /* =====================================================
       INTERNATIONAL
    ====================================================== */

    if (
        selectedTripType === "International"
    ) {

        return [

            {
                icon: "🚕",
                title:
                    `${from} → Departure Airport`,
                description:
                    "Take a cab or local transfer to your departure airport."
            },

            {
                icon: "✈️",
                title:
                    `${from} → ${destination}`,
                description:
                    "International flight to your selected destination."
            },

            {
                icon: "🛂",
                title:
                    `${destination} Airport → Immigration`,
                description:
                    "Complete arrival, immigration and baggage procedures."
            },

            {
                icon: "🚕",
                title:
                    `${destination} Airport → Hotel`,
                description:
                    "Take a local airport taxi or app-based cab to your hotel."
            }

        ];

    }


    return [

        {
            icon: "🚗",
            title:
                `${from} → ${destination}`,
            description:
                "Planned journey to your selected destination."
        }

    ];

}


/* =========================================================
   DAY PLAN HELPERS
========================================================= */

function isMealOrGenericPlace(placeName) {

    const name =
        normalize(placeName);

    const excludedWords = [

        "lunch",
        "dinner",
        "breakfast",
        "food",
        "restaurant",
        "meal",
        "snack"

    ];

    return excludedWords.some(function(word) {

        return name.includes(word);

    });

}


function getUniqueSightseeingPlaces(places) {

    const seen = new Set();

    const result = [];

    places.forEach(function(item) {

        if (!item || !item[1]) {
            return;
        }

        const placeName =
            String(item[1]).trim();

        if (
            isMealOrGenericPlace(placeName)
        ) {
            return;
        }

        const key =
            normalize(placeName);

        if (
            !key ||
            seen.has(key)
        ) {
            return;
        }

        seen.add(key);

        result.push(item);

    });

    return result;

}


/* =========================================================
   DAY PLAN
   UNIQUE PLACE PER DAY
========================================================= */

function createDayPlan(
    destination,
    days,
    travelers,
    dailyCosts
) {

    const details =
        getDestinationDetails(
            destination
        );


    const allPlaces =
        getUniqueSightseeingPlaces(
            details.places || []
        );


    let html = "";


    const totalUniquePlaces =
        allPlaces.length;


    /*
       One different sightseeing place
       is assigned to each day.

       No place is repeated.
    */

    for (
        let day = 1;
        day <= days;
        day++
    ) {

        const dailyCost =
            Math.round(
                (
                    dailyCosts.hotel +
                    dailyCosts.food +
                    dailyCosts.activities
                ) / days
            );


        let dayPlaces = [];


        /*
           Get a completely new place.
        */

        if (
            day <= totalUniquePlaces
        ) {

            dayPlaces.push(
                allPlaces[day - 1]
            );

        }


        /*
           If more days are requested
           than available real places,
           do NOT repeat a place.
        */

       
        if (dayPlaces.length === 0) {
            const fallbackPlaces = {
                "Goa": [
                    ["09:00 AM", "Chapora Fort", "Explore the historic fort and enjoy coastal views."],
                    ["11:00 AM", "Vagator Beach", "Enjoy the North Goa coastline."],
                    ["03:00 PM", "Anjuna Beach", "Explore Anjuna Beach."],
                    ["05:00 PM", "Morjim Beach", "Relax by the beach."]
                ],
                "Manali": [
                    ["09:00 AM", "Solang Valley", "Enjoy mountain views."],
                    ["11:00 AM", "Rohtang Pass", "Visit the mountain pass when accessible."],
                    ["03:00 PM", "Old Manali", "Explore the cafes and streets."],
                    ["05:00 PM", "Manu Temple", "Visit the historic temple."]
                ],
                "Jaipur": [
                    ["09:00 AM", "Jantar Mantar", "Explore the historic observatory."],
                    ["11:00 AM", "Nahargarh Fort", "Enjoy panoramic city views."],
                    ["03:00 PM", "Albert Hall Museum", "Explore Jaipur's museum."],
                    ["05:00 PM", "Birla Mandir", "Visit the marble temple."]
                ],
                "Mumbai": [
                    ["09:00 AM", "Elephanta Caves", "Explore the historic cave temples."],
                    ["11:00 AM", "Siddhivinayak Temple", "Visit the famous temple."],
                    ["03:00 PM", "Bandra-Worli Sea Link", "See the iconic sea link."],
                    ["05:00 PM", "Bandra Bandstand", "Enjoy the coastal promenade."]
                ],
                "Dubai": [
                    ["09:00 AM", "Palm Jumeirah", "Explore the famous island."],
                    ["11:00 AM", "Atlantis The Palm", "Visit the resort area."],
                    ["03:00 PM", "Dubai Frame", "Visit the iconic landmark."],
                    ["05:00 PM", "Al Fahidi Historical District", "Explore old Dubai."]
                ],
                "Singapore": [
                    ["09:00 AM", "Sentosa Island", "Explore the island attractions."],
                    ["11:00 AM", "Singapore Botanic Gardens", "Walk through the gardens."],
                    ["03:00 PM", "National Gallery Singapore", "Explore art and culture."],
                    ["05:00 PM", "Clarke Quay", "Enjoy the riverside area."]
                ],
                "Bangkok": [
                    ["09:00 AM", "Wat Arun", "Visit the Temple of Dawn."],
                    ["11:00 AM", "Wat Pho", "Explore the famous temple."],
                    ["03:00 PM", "Jim Thompson House", "Explore the historic house."],
                    ["05:00 PM", "Asiatique The Riverfront", "Explore the riverside market."]
                ],
                "London": [
                    ["09:00 AM", "Tower of London", "Explore the historic fortress."],
                    ["11:00 AM", "British Museum", "Discover historic collections."],
                    ["03:00 PM", "St Paul's Cathedral", "Visit the famous cathedral."],
                    ["05:00 PM", "Trafalgar Square", "Explore the central square."]
                ]
            };

            const extraPlaces = fallbackPlaces[destination] || [];
            const placeIndex = day - totalUniquePlaces - 1;

            if (extraPlaces[placeIndex]) {
                dayPlaces.push(extraPlaces[placeIndex]);
            } else {
                dayPlaces.push([
                    "--",
                    `Explore ${destination}`,
                    `Explore another attraction in ${destination}.`
                ]);
            }
        }




        html += `

            <div class="day-card">

                <div class="day-heading">

                    <h3>
                        📅 Day ${day}
                    </h3>

                    <span class="day-cost">
                        Estimated ₹${dailyCost.toLocaleString("en-IN")}
                    </span>

                </div>


                <div class="timeline">

                    ${dayPlaces.map(
                        function(item) {

                            return `

                                <div class="timeline-item">

                                    <div class="timeline-time">
                                        ${item[0]}
                                    </div>

                                    <div class="timeline-title">
                                        ${item[1]}
                                    </div>

                                    <div class="timeline-desc">
                                        ${item[2]}
                                    </div>

                                </div>

                            `;

                        }
                    ).join("")}


                    <div class="timeline-item">

                        <div class="timeline-time">
                            01:00 PM
                        </div>

                        <div class="timeline-title">
                            🍽️ Local Food / Lunch
                        </div>

                        <div class="timeline-desc">
                            Lunch at a suitable local restaurant near the day's sightseeing area.
                        </div>

                    </div>


                    <div class="timeline-item">

                        <div class="timeline-time">
                            07:30 PM
                        </div>

                        <div class="timeline-title">
                            🏨 Hotel & Evening Rest
                        </div>

                        <div class="timeline-desc">
                            Return to the hotel, rest and prepare for the next day's new location.
                        </div>

                    </div>

                </div>


                <div class="day-info-grid">

                    <div class="day-info">

                        <strong>
                            🚗 Transport
                        </strong>

                        Local sightseeing
                        and destination transfer

                    </div>


                    <div class="day-info">

                        <strong>
                            🏨 Stay
                        </strong>

                        Hotel accommodation
                        according to selected style

                    </div>


                    <div class="day-info">

                        <strong>
                            🍽️ Food
                        </strong>

                        Breakfast, lunch
                        and dinner options

                    </div>

                </div>

            </div>

        `;

    }


    return html;

}


/* =========================================================
   MONEY FORMAT
========================================================= */

function formatINR(amount) {

    return "₹" +
        Math.round(
            amount
        ).toLocaleString(
            "en-IN"
        );

}


/* =========================================================
   GENERATE PLAN
========================================================= */

function generatePlan() {

    let from =
        getFromCity();


    const destination =
        getSelectedDestination();


    const travelersInput =
        getElement("travelers");


    const budgetInput =
        getElement("budget");


    const styleInput =
        getElement("travelStyle");


    const departureInput =
        getElement("departureDate");


    const returnInput =
        getElement("returnDate");


    const travelers =
        Number(
            travelersInput
                ? travelersInput.value
                : 1
        ) || 1;


    const budget =
        Number(
            budgetInput
                ? budgetInput.value
                : 0
        ) || 0;


    const style =
        styleInput
            ? styleInput.value
            : "Balanced";


    const departure =
        departureInput
            ? departureInput.value
            : "";


    const returnDate =
        returnInput
            ? returnInput.value
            : "";


    /* =====================================================
       VALIDATE FROM CITY
    ====================================================== */

    if (!from) {

        alert(
            currentLanguage === "gu"
                ? "કૃપા કરીને From City પસંદ કરો."
                : currentLanguage === "hi"
                    ? "कृपया From City दर्ज करें."
                    : "Please enter your From City."
        );

        return;

    }


    /*
       IMPORTANT:
       The user cannot enter random text anymore.

       Example:
       k
       abc
       xyz

       These will NOT generate a plan.
    */

    if (!isValidFromCity(from)) {

        alert(
            currentLanguage === "gu"
                ? "❌ From City માન્ય નથી. કૃપા કરીને list માંથી valid city name દાખલ કરો."
                : currentLanguage === "hi"
                    ? "❌ From City मान्य नहीं है। कृपया list में से valid city name दर्ज करें।"
                    : "❌ Invalid From City. Please enter a valid city name from the available city list."
        );

        return;

    }


    /*
       Convert entered city to the
       official/canonical city name.
    */

    from =
        getCanonicalCityName(from);


    if (!from) {

        alert(
            "Invalid From City."
        );

        return;

    }


    /* =====================================================
       DESTINATION VALIDATION
    ====================================================== */

    if (!destination) {

        alert(
            currentLanguage === "gu"
                ? "કૃપા કરીને Destination City પસંદ કરો."
                : currentLanguage === "hi"
                    ? "कृपया Destination City चुनें."
                    : "Please select your Destination City."
        );

        return;

    }


    /*
       Extra safety:
       Destination must exist in the
       selected trip type's database.
    */

    if (
        selectedTripType === "India"
    ) {

        const validIndiaCities =
            getAllIndiaCities();

        if (
            !validIndiaCities.some(
                function(city) {

                    return (
                        normalize(city) ===
                        normalize(destination)
                    );

                }
            )
        ) {

            alert(
                "Please select a valid Indian destination city."
            );

            return;

        }

    }


    if (
        selectedTripType === "International"
    ) {

        const validInternationalCities =
            getAllInternationalCities();

        if (
            !validInternationalCities.some(
                function(city) {

                    return (
                        normalize(city) ===
                        normalize(destination)
                    );

                }
            )
        ) {

            alert(
                "Please select a valid international destination city."
            );

            return;

        }

    }


    /* =====================================================
       PREVENT SAME CITY
    ====================================================== */

    if (
        normalize(from) ===
        normalize(destination)
    ) {

        alert(
            currentLanguage === "gu"
                ? "❌ From City અને Destination City same ન હોઈ શકે."
                : currentLanguage === "hi"
                    ? "❌ From City और Destination City एक जैसे नहीं हो सकते।"
                    : "❌ From City and Destination City cannot be the same."
        );

        return;

    }


    /* =====================================================
       DATE VALIDATION
    ====================================================== */

    if (
        departure &&
        returnDate &&
        new Date(returnDate) <
        new Date(departure)
    ) {

        alert(
            "Return date cannot be before departure date."
        );

        return;

    }


    /* =====================================================
       BUDGET VALIDATION
    ====================================================== */

    if (budget <= 0) {

        alert(
            currentLanguage === "gu"
                ? "કૃપા કરીને તમારું Budget દાખલ કરો."
                : currentLanguage === "hi"
                    ? "कृपया अपना Budget दर्ज करें."
                    : "Please enter your travel budget."
        );

        return;

    }


    /* =====================================================
       TRIP DAYS
    ====================================================== */

    const days =
        getTripDays();


    /* =====================================================
       SERVICES
    ====================================================== */

    const hotelSelected =
        getElement("hotelOption")
            ? getElement("hotelOption").checked
            : true;


    const foodSelected =
        getElement("foodOption")
            ? getElement("foodOption").checked
            : true;


    const restaurantSelected =
        getElement("restaurantOption")
            ? getElement("restaurantOption").checked
            : true;


    /* =====================================================
       COST CALCULATION
    ====================================================== */

    const transportCost =
        calculateTransportCost(
            from,
            destination,
            selectedTransport,
            travelers
        );


    const dailyCosts =
        calculateDailyCosts(
            destination,
            travelers,
            days,
            style
        );


    const hotelCost =
        hotelSelected
            ? dailyCosts.hotel
            : 0;


    const foodCost =
        foodSelected
            ? dailyCosts.food
            : 0;


    const activityCost =
        dailyCosts.activities;


    const restaurantCost =
        restaurantSelected
            ? (
                500 *
                travelers *
                days
            )
            : 0;


    const localTransportCost =
        selectedTripType === "International"
            ? 3500 *
              travelers *
              days
            : 1000 *
              travelers *
              days;


    const totalINR =
        transportCost +
        localTransportCost +
        hotelCost +
        foodCost +
        activityCost +
        restaurantCost;


    const remaining =
        budget -
        totalINR;


    /* =====================================================
       ROUTE
    ====================================================== */

    const route =
        createRoute(
            from,
            destination,
            selectedTransport
        );


    const routeHTML =
        route.map(
            function(step, index) {

                return `

                    <div class="route-step">

                        ${step.icon}
                        ${step.title}

                        <div
                            style="
                                color:#64748b;
                                font-size:13px;
                                font-weight:normal;
                                margin-left:28px;
                                margin-top:3px;
                            "
                        >
                            ${step.description}
                        </div>

                    </div>

                    ${
                        index <
                        route.length - 1

                        ? `
                            <div class="route-arrow">
                                ↓
                            </div>
                        `

                        : ""
                    }

                `;

            }
        ).join("");


    /* =====================================================
       BUDGET STATUS
    ====================================================== */

    let budgetStatusHTML = "";


    if (
        remaining >= 0
    ) {

        budgetStatusHTML = `

            <div class="budget-status success">

                ✅ Within Budget

                <br>

                <span
                    style="
                        font-weight:600;
                        font-size:14px;
                    "
                >
                    Remaining Budget:
                    ${formatINR(remaining)}
                </span>

            </div>

        `;

    } else {

        budgetStatusHTML = `

            <div class="budget-status danger">

                ⚠️ Over Budget

                <br>

                <span
                    style="
                        font-weight:600;
                        font-size:14px;
                    "
                >
                    Extra Required:
                    ${formatINR(
                        Math.abs(remaining)
                    )}
                </span>

            </div>

        `;

    }


    /* =====================================================
       EXPENSE TABLE
    ====================================================== */

    const costRows = [

        [
            "✈️ Transportation",
            transportCost
        ],

        [
            "🚕 Local Transport",
            localTransportCost
        ],

        [
            "🏨 Hotel",
            hotelCost
        ],

        [
            "🍽️ Food",
            foodCost
        ],

        [
            "🎟️ Activities",
            activityCost
        ],

        [
            "🍴 Restaurant",
            restaurantCost
        ]

    ];


    const tableHTML =
        costRows.map(
            function(row) {

                return `

                    <tr>

                        <td>
                            ${row[0]}
                        </td>

                        <td>
                            ${formatINR(
                                row[1]
                            )}
                        </td>

                    </tr>

                `;

            }
        ).join("");


    /* =====================================================
       RESULT
    ====================================================== */

    const result =
        getElement("result");


    if (!result) {

        alert(
            "Result section not found."
        );

        return;

    }


    result.innerHTML = `

        <div class="result-header">

            <div class="route">

                ${from}
                →
                ${destination}

            </div>


            <div class="route-detail">

                ${
                    selectedTripType === "India"
                        ? "🇮🇳 India Trip"
                        : "🌎 International Trip"
                }

                • ${selectedTransport}

                • ${days} Days

                • ${travelers} Traveler(s)

            </div>

        </div>



        <div class="result-body">


            <!-- ==========================================
                 BUDGET FIRST
            =========================================== -->

            <div class="budget-box">

                <div
                    style="
                        font-weight:800;
                        margin-bottom:15px;
                        font-size:18px;
                    "
                >
                    💰 Your Trip Budget
                </div>


                <div class="budget-top-grid">


                    <div class="budget-stat">

                        <small>
                            Your Maximum Budget
                        </small>

                        <strong>
                            ${formatINR(budget)}
                        </strong>

                    </div>


                    <div class="budget-stat">

                        <small>
                            Estimated Actual Cost
                        </small>

                        <strong>
                            ${formatINR(totalINR)}
                        </strong>

                    </div>


                    <div class="budget-stat">

                        <small>
                            ${
                                remaining >= 0
                                    ? "Remaining"
                                    : "Extra Required"
                            }
                        </small>

                        <strong
                            style="
                                color:${
                                    remaining >= 0
                                        ? "#15803d"
                                        : "#dc2626"
                                };
                            "
                        >
                            ${formatINR(
                                Math.abs(
                                    remaining
                                )
                            )}
                        </strong>

                    </div>


                </div>


                <div
                    class="
                        budget-main
                        ${
                            remaining < 0
                                ? "over-budget"
                                : ""
                        }
                    "
                >

                    ${formatINR(totalINR)}

                </div>


                <div class="budget-inr">

                    Estimated total trip cost

                </div>


                ${budgetStatusHTML}


                <table class="budget-table">

                    <thead>

                        <tr>

                            <th>
                                Expense
                            </th>

                            <th>
                                Estimated Cost
                            </th>

                        </tr>

                    </thead>


                    <tbody>

                        ${tableHTML}


                        <tr>

                            <th>
                                TOTAL
                            </th>

                            <th>
                                ${formatINR(
                                    totalINR
                                )}
                            </th>

                        </tr>

                    </tbody>

                </table>

            </div>



            <!-- ==========================================
                 TRIP SUMMARY
            =========================================== -->

            <div class="summary-grid">


                <div class="summary-card">

                    <small>
                        Trip Type
                    </small>

                    <strong>
                        ${selectedTripType}
                    </strong>

                </div>


                <div class="summary-card">

                    <small>
                        Transport
                    </small>

                    <strong>
                        ${selectedTransport}
                    </strong>

                </div>


                <div class="summary-card">

                    <small>
                        Duration
                    </small>

                    <strong>
                        ${days} Days
                    </strong>

                </div>


                <div class="summary-card">

                    <small>
                        Travelers
                    </small>

                    <strong>
                        ${travelers}
                    </strong>

                </div>


            </div>



            <!-- ==========================================
                 LOCATION
            =========================================== -->

            <div
                style="
                    margin-bottom:25px;
                    padding:18px;
                    background:#f8fafc;
                    border:1px solid #e2e8f0;
                    border-radius:15px;
                "
            >

                <strong>
                    📍 Destination
                </strong>

                <div
                    style="
                        margin-top:5px;
                        color:#64748b;
                    "
                >

                    ${
                        selectedTripType === "India"

                        ? (
                            getElement("indiaState")
                                ? getElement("indiaState").value
                                : ""
                          )
                          + ", India"

                        : (
                            getElement("internationalCountry")
                                ? getElement("internationalCountry").value
                                : ""
                          )

                    }

                </div>

            </div>



            <!-- ==========================================
                 ROUTE
            =========================================== -->

            <h2
                style="
                    margin-bottom:18px;
                "
            >
                🗺️ Your Travel Route
            </h2>


            <div class="route-box">

                ${routeHTML}

            </div>



            <!-- ==========================================
                 DAY PLAN
            =========================================== -->

            <h2
                style="
                    margin-bottom:18px;
                "
            >
                📅 Day-by-Day Travel Plan
            </h2>


            ${createDayPlan(
                destination,
                days,
                travelers,
                dailyCosts
            )}



            <!-- ==========================================
                 NOTE
            =========================================== -->

            <div class="note">

                <strong>
                    🤖 WanderAI Planning Note
                </strong>

                <br><br>

                Each day uses a different sightseeing
                location whenever real destination
                places are available. WanderAI does not
                intentionally repeat the same sightseeing
                place across different days.

                <br><br>

                This is an estimated travel plan.
                Transport, hotel, food and activity
                prices can change depending on travel
                date, season, availability and provider.

                <br><br>

                💡 For real-time flight, bus, train
                and hotel prices, external travel APIs
                or booking providers are required.

            </div>


        </div>

    `;


    result.style.display =
        "block";


    result.scrollIntoView({

        behavior: "smooth",

        block: "start"

    });

}


/* =========================================================
   LANGUAGE SYSTEM
========================================================= */

function applyLanguage(language) {

    if (
        !translations[language]
    ) {

        language = "en";

    }


    currentLanguage =
        language;


    const data =
        translations[
            language
        ];


    document
        .querySelectorAll(
            "[data-i18n]"
        )
        .forEach(
            function(element) {

                const key =
                    element.dataset.i18n;


                if (
                    data[key]
                ) {

                    element.textContent =
                        data[key];

                }

            }
        );


    localStorage.setItem(
        "wanderAI_language",
        language
    );

}


/* =========================================================
   LANGUAGE SELECTOR
========================================================= */

function setupLanguage() {

    const selector =
        getElement("language");


    if (!selector) {
        return;
    }


    const saved =
        localStorage.getItem(
            "wanderAI_language"
        );


    if (
        saved &&
        translations[saved]
    ) {

        selector.value =
            saved;

        applyLanguage(
            saved
        );

    }


    selector.addEventListener(
        "change",
        function() {

            applyLanguage(
                selector.value
            );

        }
    );

}


/* =========================================================
   DATE DEFAULTS
========================================================= */

function setupDates() {

    const departure =
        getElement("departureDate");

    const returnDate =
        getElement("returnDate");


    if (
        !departure ||
        !returnDate
    ) {

        return;

    }


    if (
        !departure.value
    ) {

        const today =
            new Date();


        const tomorrow =
            new Date(
                today
            );


        tomorrow.setDate(
            today.getDate() + 1
        );


        departure.value =
            tomorrow
                .toISOString()
                .split("T")[0];

    }


    if (
        !returnDate.value
    ) {

        const today =
            new Date();


        const returnDay =
            new Date(
                today
            );


        returnDay.setDate(
            today.getDate() + 5
        );


        returnDate.value =
            returnDay
                .toISOString()
                .split("T")[0];

    }

}


/* =========================================================
   URL DESTINATION SUPPORT
========================================================= */

function loadDestinationFromURL() {

    const params =
        new URLSearchParams(
            window.location.search
        );


    const destination =
        params.get("to");


    if (!destination) {
        return;
    }


    const indiaCities =
        Object.values(
            indiaDestinations
        ).flat();


    const internationalCities =
        Object.values(
            internationalDestinations
        ).flat();


    if (
        indiaCities.includes(
            destination
        )
    ) {

        selectTripType(
            "India"
        );


        for (
            const state in
            indiaDestinations
        ) {

            if (
                indiaDestinations[state]
                    .includes(destination)
            ) {

                const stateSelect =
                    getElement(
                        "indiaState"
                    );


                if (
                    stateSelect
                ) {

                    stateSelect.value =
                        state;

                    stateSelect.dispatchEvent(
                        new Event("change")
                    );

                }


                const citySelect =
                    getElement(
                        "indiaCity"
                    );


                if (
                    citySelect
                ) {

                    citySelect.value =
                        destination;

                    citySelect.dispatchEvent(
                        new Event("change")
                    );

                }


                break;

            }

        }

    } else if (
        internationalCities.includes(
            destination
        )
    ) {

        selectTripType(
            "International"
        );


        for (
            const country in
            internationalDestinations
        ) {

            if (
                internationalDestinations[
                    country
                ].includes(
                    destination
                )
            ) {

                const countrySelect =
                    getElement(
                        "internationalCountry"
                    );


                if (
                    countrySelect
                ) {

                    countrySelect.value =
                        country;

                    countrySelect.dispatchEvent(
                        new Event("change")
                    );

                }


                const citySelect =
                    getElement(
                        "internationalCity"
                    );


                if (
                    citySelect
                ) {

                    citySelect.value =
                        destination;

                    citySelect.dispatchEvent(
                        new Event("change")
                    );

                }


                break;

            }

        }

    }

}


/* =========================================================
   DESTINATIONS PAGE FUNCTIONS
========================================================= */

function showDestinationType(type) {

    const indiaBtn =
        getElement(
            "indiaDestinationBtn"
        );


    const internationalBtn =
        getElement(
            "internationalDestinationBtn"
        );


    const indiaPanel =
        getElement(
            "indiaDestinationPanel"
        );


    const internationalPanel =
        getElement(
            "internationalDestinationPanel"
        );


    if (indiaBtn) {

        indiaBtn.classList.toggle(
            "active",
            type === "India"
        );

    }


    if (internationalBtn) {

        internationalBtn.classList.toggle(
            "active",
            type === "International"
        );

    }


    if (indiaPanel) {

        indiaPanel.style.display =
            type === "India"
                ? "block"
                : "none";

    }


    if (internationalPanel) {

        internationalPanel.style.display =
            type === "International"
                ? "block"
                : "none";

    }

}


/* =========================================================
   INITIALIZATION
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        setupIndiaCityDropdown();

        setupInternationalCityDropdown();

        setupLanguage();

        setupDates();

        selectTripType(
            "India"
        );

        selectTransport(
            "Flight"
        );

        loadDestinationFromURL();

    }
);


document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("select").forEach(function (select) {
        const option = select.options[select.selectedIndex];

        if (
            option &&
            option.textContent.trim().toLowerCase().includes("select district")
        ) {
            const container = select.closest(".form-group, .input-group, .form-field");

            if (container) {
                container.style.display = "none";
            } else {
                select.style.display = "none";
            }
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("select").forEach(function (select) {
        const options = Array.from(select.options || []);

        const isLanguageDropdown = options.some(function (option) {
            return /^(english|ગુજરાતી|gujarati|hindi|हिन्दी)$/i.test(
                option.textContent.trim()
            );
        });

        if (isLanguageDropdown) {
            const container = select.closest(
                ".language-selector, .language-switcher, .language-dropdown"
            );

            if (container) {
                container.style.display = "none";
            } else {
                select.style.display = "none";
            }
        }
    });
});

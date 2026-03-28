/**
 * HealthXray - High-End Frontend Logic
 * Features: Auto-Parsing Tables, Urdu Support, & Professional UI
 */

const symptomsDatabase = [
    // General Symptoms
    "abdominal pain", "acid reflux", "acne", "anxiety", "back pain", "bloating", "blood in stool", 
    "blurry vision", "body aches", "breathing difficulty", "chest pain", "chills", "constipation", 
    "cough", "dark urine", "depression", "diarrhea", "dizziness", "dry mouth", "fatigue", "fever", 
    "headache", "heart palpitations", "heartburn", "insomnia", "itching", "joint pain", "muscle weakness", 
    "nausea", "numbness", "rash", "shortness of breath", "sore throat", "swelling", "vomiting", "weakness",
    "night sweats", "swollen lymph nodes", "loss of appetite", "unexplained weight loss", "unexplained weight gain", 
    "sneezing", "nasal congestion", "runny nose", "post-nasal drip", "earache", "hearing loss", "ringing in ears", 
    "muffled hearing", "hoarseness", "shivering", "indigestion", "gas", "belching", "stomach cramps", "pale stool", 
    "foul-smelling stool", "painful urination", "frequent urination", "urgent urination", "cloudy urine", 
    "strong-smelling urine", "bladder pressure", "pelvic pain", "rectal itching", "hives", "dry skin", "peeling skin", 
    "blisters", "bruising easily", "yellowing skin", "pale skin", "brittle nails", "hair loss", "red eyes", 
    "watery eyes", "puffy eyes", "sneezing fits", "memory loss", "confusion", "brain fog", "irritability", 
    "mood swings", "panic attacks", "shaking hands", "tremors", "loss of balance", "slurred speech", 
    "difficulty swallowing", "sensitivity to light", "sensitivity to noise", "tingling sensation", 
    "missed period", "heavy menstrual bleeding", "irregular periods", "period cramps", "breast pain", 
    "breast lumps", "hot flashes", "vaginal discharge", "vaginal itching",
    
    // Head & Face Symptoms
    "scalp tenderness", "scalp itching", "scalp flaking", "scalp bumps", "facial pain", "facial swelling",
    "facial numbness", "facial tics", "jaw pain", "jaw popping", "teeth grinding", "toothache", "gum bleeding",
    "gum swelling", "mouth sores", "tongue pain", "tongue discoloration", "bad breath", "metallic taste",
    "loss of taste", "loss of smell", "nosebleeds", "sinus pressure", "sinus pain", "snoring", "sleep apnea",
    
    // Eye Symptoms
    "eye pain", "eye strain", "eye discharge", "eye twitching", "double vision", "floaters", "flashing lights",
    "dry eyes", "itchy eyes", "burning eyes", "crossed eyes", "drooping eyelid", "bulging eyes", "yellow eyes",
    "bloodshot eyes", "night blindness", "color blindness", "peripheral vision loss", "halos around lights",
    
    // Ear Symptoms
    "ear fullness", "ear drainage", "ear pain", "ear popping", "ear wax buildup", "balance problems",
    "vertigo", "motion sickness", "sound sensitivity", "tinnitus", "pulsatile tinnitus",
    
    // Nose & Sinus Symptoms
    "stuffy nose", "runny nose", "sneezing", "post nasal drip", "loss of smell", "nose pain", "nose swelling",
    "nasal polyps", "deviated septum", "allergic rhinitis", "hay fever", "sinus headache",
    
    // Mouth & Throat Symptoms
    "sore throat", "scratchy throat", "throat swelling", "throat tightness", "lump in throat", "swallowing pain",
    "chronic cough", "dry cough", "wet cough", "productive cough", "coughing blood", "croup cough",
    "barking cough", "whooping cough", "voice changes", "voice loss", "throat clearing",
    
    // Respiratory Symptoms
    "wheezing", "chest tightness", "chest congestion", "rales", "rhonchi", "stridor", "hyperventilation",
    "hypoventilation", "rapid breathing", "shallow breathing", "noisy breathing", "mouth breathing",
    
    // Cardiovascular Symptoms
    "chest pressure", "chest discomfort", "rapid heartbeat", "slow heartbeat", "irregular heartbeat",
    "skipped beats", "chest fluttering", "high blood pressure", "low blood pressure", "orthostatic hypotension",
    "fainting", "near fainting", "leg cramps", "leg pain walking", "cold hands and feet", "blue fingers",
    "swollen feet", "swollen ankles", "varicose veins", "spider veins", "paleness",
    
    // Digestive Symptoms
    "upper abdominal pain", "lower abdominal pain", "left abdominal pain", "right abdominal pain",
    "abdominal tenderness", "abdominal distension", "early satiety", "regurgitation", "water brash",
    "dysphagia", "odynophagia", "esophageal spasm", "esophageal reflux", "gastroparesis", "gastritis",
    "stomach upset", "stomach gurgling", "intestinal cramps", "intestinal gas", "flatulence",
    "eructation", "nausea without vomiting", "cyclic vomiting", "projectile vomiting", "fecal incontinence",
    "constipation alternating diarrhea", "ribbon stools", "mucus in stool", "fat in stool", "steatorrhea",
    
    // Urinary Symptoms
    "urinary hesitancy", "urinary straining", "urinary stream interruption", "dribbling", "nocturia",
    "bedwetting", "urinary retention", "urinary incontinence", "stress incontinence", "urge incontinence",
    "overflow incontinence", "blood in urine", "pneumaturia", "urinary frequency", "urinary urgency",
    
    // Male Reproductive Symptoms
    "testicular pain", "testicular lump", "testicular swelling", "scrotal pain", "scrotal swelling",
    "penile discharge", "penile sores", "penile rash", "penile itching", "erectile dysfunction",
    "premature ejaculation", "delayed ejaculation", "painful ejaculation", "blood in semen",
    "decreased libido", "infertility", "prostate pain", "prostate enlargement",
    
    // Female Reproductive Symptoms
    "vaginal dryness", "vaginal odor", "vaginal bleeding", "postmenopausal bleeding", "intermenstrual bleeding",
    "spotting", "painful intercourse", "pelvic pressure", "pelvic heaviness", "uterine cramps",
    "ovarian pain", "mittelschmerz", "premenstrual syndrome", "premenstrual dysphoric disorder",
    "endometriosis pain", "fibroid pain", "cyst pain", "prolapse symptoms", "infertility female",
    
    // Breast Symptoms
    "breast tenderness", "breast swelling", "breast redness", "breast warmth", "breast dimpling",
    "breast puckering", "nipple discharge", "nipple retraction", "nipple cracking", "nipple sores",
    "breast cyst", "breast fibroadenoma", "gynecomastia", "male breast pain", "male breast lump",
    
    // Skin Symptoms
    "skin redness", "skin inflammation", "skin lesions", "skin ulcers", "skin nodules", "skin tags",
    "skin growths", "skin discoloration", "skin hyperpigmentation", "skin hypopigmentation",
    "skin mottling", "skin marbling", "skin thinning", "skin thickening", "skin hardening",
    "skin tightening", "skin fragility", "skin tearing", "poor wound healing", "keloids",
    "scarring", "stretch marks", "cellulite", "rosacea", "eczema", "psoriasis", "dermatitis",
    "contact dermatitis", "seborrheic dermatitis", "atopic dermatitis", "nummular dermatitis",
    "stasis dermatitis", "perioral dermatitis", "diaper rash", "heat rash", "prickly heat",
    "sunburn", "windburn", "chemical burn", "thermal burn", "frostbite", "chilblains",
    
    // Nail Symptoms
    "nail discoloration", "nail thickening", "nail thinning", "nail brittleness", "nail peeling",
    "nail pitting", "nail ridges", "nail clubbing", "nail spooning", "ingrown nail", "paronychia",
    "nail fungus", "nail psoriasis", "subungual hematoma", "splinter hemorrhages",
    
    // Hair Symptoms
    "hair thinning", "hair breakage", "hair shedding", "alopecia areata", "male pattern baldness",
    "female pattern baldness", "telogen effluvium", "anagen effluvium", "hirsutism", "hypertrichosis",
    "ingrown hairs", "folliculitis", "scalp psoriasis", "scalp seborrhea", "dandruff",
    
    // Musculoskeletal Symptoms
    "neck pain", "neck stiffness", "shoulder pain", "shoulder stiffness", "arm pain", "elbow pain",
    "wrist pain", "hand pain", "finger pain", "hip pain", "thigh pain", "knee pain", "calf pain",
    "ankle pain", "foot pain", "toe pain", "heel pain", "arch pain", "bone pain", "muscle pain",
    "muscle stiffness", "muscle spasms", "muscle cramps", "muscle twitching", "muscle wasting",
    "muscle hypertrophy", "joint stiffness", "joint swelling", "joint redness", "joint warmth",
    "joint crepitus", "joint locking", "joint giving way", "back stiffness", "back spasm",
    "sciatica", "radiculopathy", "neuropathy", "peripheral neuropathy",
    
    // Neurological Symptoms
    "tremor at rest", "intention tremor", "postural tremor", "pill-rolling tremor", "asterixis",
    "chorea", "athetosis", "dystonia", "tardive dyskinesia", "myoclonus", "startle reflex",
    "seizures", "grand mal seizures", "petit mal seizures", "focal seizures", "absence seizures",
    "tonic-clonic seizures", "atonic seizures", "myoclonic seizures", "infantile spasms",
    "status epilepticus", "syncope", "cataplexy", "narcolepsy", "sleep paralysis",
    "hypnagogic hallucinations", "hypnopompic hallucinations", "restless legs syndrome",
    "periodic limb movement disorder", "sleep walking", "sleep talking", "night terrors",
    "bruxism", "headache tension", "headache cluster", "headache migraine", "hemiplegic migraine",
    "ophthalmoplegic migraine", "basilar migraine", "menstrual migraine", "chronic daily headache",
    "medication overuse headache", "thunderclap headache", "exertional headache", "cough headache",
    "sex headache", "cervicogenic headache", "occipital neuralgia", "trigeminal neuralgia",
    "glossopharyngeal neuralgia", "postherpetic neuralgia", "complex regional pain syndrome",
    "phantom limb pain", "central pain syndrome", "thalamic pain", "neuropathic pain",
    
    // Psychiatric Symptoms
    "depressed mood", "anhedonia", "hopelessness", "helplessness", "worthlessness", "guilt",
    "rumination", "obsessions", "compulsions", "phobias", "social anxiety", "agoraphobia",
    "claustrophobia", "acrophobia", "arachnophobia", "panic disorder", "generalized anxiety",
    "separation anxiety", "selective mutism", "post-traumatic stress", "hypervigilance",
    "avoidance behavior", "intrusive thoughts", "flashbacks", "nightmares", "dissociation",
    "derealization", "depersonalization", "mania", "hypomania", "grandiosity", "pressured speech",
    "flight of ideas", "racing thoughts", "distractibility", "psychomotor agitation",
    "psychomotor retardation", "catatonia", "waxy flexibility", "negativism", "echolalia",
    "echopraxia", "paranoia", "delusions", "hallucinations auditory", "hallucinations visual",
    "hallucinations olfactory", "hallucinations gustatory", "hallucinations tactile",
    "command hallucinations", "thought insertion", "thought broadcasting", "thought withdrawal",
    "magical thinking", "ideas of reference", "loose associations", "word salad", "clang associations",
    "neologisms", "perseveration", "circumstantiality", "tangentiality",
    
    // Cognitive Symptoms
    "short-term memory loss", "long-term memory loss", "working memory deficit", "prospective memory loss",
    "episodic memory loss", "semantic memory loss", "procedural memory loss", "amnesia",
    "anterograde amnesia", "retrograde amnesia", "transient global amnesia", "confabulation",
    "executive dysfunction", "poor planning", "poor judgment", "poor insight", "poor impulse control",
    "disinhibition", "apathy", "abulia", "perseveration", "set shifting difficulty", "task switching difficulty",
    "attention deficit", "hyperfocus", "distractibility", "processing speed deficit",
    
    // Sleep Symptoms
    "difficulty falling asleep", "difficulty staying asleep", "early morning awakening", "non-restorative sleep",
    "excessive daytime sleepiness", "sleep inertia", "sleep drunkenness", "confusional arousals",
    "sleep terrors", "sleepwalking", "sleep eating", "REM sleep behavior disorder", "nightmare disorder",
    "sleep paralysis", "hypersomnia", "Kleine-Levin syndrome", "circadian rhythm disorder",
    "delayed sleep phase", "advanced sleep phase", "irregular sleep-wake rhythm", "shift work disorder",
    "jet lag disorder", "insufficient sleep syndrome", "long sleeper", "short sleeper",
    
    // Allergy Symptoms
    "allergic reaction", "anaphylaxis", "angioedema", "urticaria", "allergic shiners", "allergic salute",
    "allergic crease", "oral allergy syndrome", "food allergy", "drug allergy", "insect sting allergy",
    "latex allergy", "dust mite allergy", "mold allergy", "pet allergy", "cockroach allergy",
    "pollen allergy", "ragweed allergy", "grass allergy", "tree allergy", "weed allergy",
    
    // Immune Symptoms
    "recurrent infections", "chronic infections", "opportunistic infections", "autoimmune symptoms",
    "immunodeficiency symptoms", "fever of unknown origin", "prolonged fever", "relapsing fever",
    "periodic fever syndromes", "lymphadenopathy", "splenomegaly", "hepatomegaly", "hepatosplenomegaly",
    
    // Endocrine Symptoms
    "heat intolerance", "cold intolerance", "temperature dysregulation", "excessive thirst",
    "excessive hunger", "polyphagia", "polydipsia", "polyuria", "nocturnal polyuria", "glycosuria",
    "ketonuria", "goiter", "thyroid nodule", "thyroid pain", "thyroid enlargement", "neck swelling",
    "adrenal insufficiency symptoms", "Cushing syndrome symptoms", "acromegaly symptoms",
    "pituitary tumor symptoms", "diabetes insipidus symptoms", "SIADH symptoms",
    
    // Metabolic Symptoms
    "hypoglycemia symptoms", "hyperglycemia symptoms", "ketoacidosis symptoms", "HHNS symptoms",
    "metabolic acidosis symptoms", "metabolic alkalosis symptoms", "respiratory acidosis symptoms",
    "respiratory alkalosis symptoms", "electrolyte imbalance symptoms", "dehydration symptoms",
    "overhydration symptoms", "edema", "anasarca", "ascites", "lymphedema", "lipedema",
    
    // Hematologic Symptoms
    "anemia symptoms", "pallor", "fatigue", "dizziness", "shortness of breath", "cold intolerance",
    "pica", "easy bruising", "easy bleeding", "petechiae", "purpura", "ecchymosis", "hematoma",
    "epistaxis", "gum bleeding", "heavy menstrual bleeding", "prolonged bleeding", "hemarthrosis",
    "hematemesis", "melena", "hematochezia", "hemoptysis", "hematuria", "thrombosis symptoms",
    "embolism symptoms", "DVT symptoms", "PE symptoms", "stroke symptoms", "TIA symptoms",
    
    // Infectious Symptoms
    "malaise", "lethargy", "prostration", "sepsis symptoms", "septic shock symptoms", "SIRS symptoms",
    "bacteremia symptoms", "viremia symptoms", "fungemia symptoms", "parasitemia symptoms",
    "localized infection symptoms", "systemic infection symptoms", "chronic infection symptoms",
    "latent infection symptoms", "reactivation infection symptoms", "opportunistic infection symptoms",
    
    // Pediatric Symptoms
    "infant colic", "infant reflux", "infant spitting up", "infant projectile vomiting",
    "infant failure to thrive", "infant poor feeding", "infant lethargy", "infant irritability",
    "infant high-pitched cry", "infant weak cry", "infant grunting", "infant nasal flaring",
    "infant retractions", "infant head lag", "infant developmental delay", "infant regression",
    "infant seizure", "infant staring spells", "infant breath-holding spells", "infant cyanosis",
    "infant jaundice", "infant pallor", "infant rash", "infant diaper rash", "infant cradle cap",
    "infant milia", "infant erythema toxicum", "infant salmon patch", "infant hemangioma",
    "infant port wine stain", "infant Mongolian spot", "infant birthmark", "infant lymphadenopathy",
    "child fever", "child seizure", "child febrile seizure", "child cough", "child cold symptoms",
    "child flu symptoms", "child ear infection symptoms", "child strep throat symptoms",
    "child UTI symptoms", "child gastroenteritis symptoms", "child constipation symptoms",
    "child abdominal pain", "child headache", "child growing pains", "child joint pain",
    "child limp", "child rash", "child hives", "child eczema", "child asthma symptoms",
    "child allergy symptoms", "child food allergy symptoms", "child anaphylaxis symptoms",
    "child ADHD symptoms", "child autism symptoms", "child anxiety symptoms", "child depression symptoms",
    "child OCD symptoms", "child tic symptoms", "child Tourette symptoms", "child learning disability",
    "child speech delay", "child language delay", "child motor delay", "child social delay",
    
    // Geriatric Symptoms
    "elderly falls", "elderly gait disturbance", "elderly balance problems", "elderly frailty",
    "elderly sarcopenia", "elderly osteoporosis symptoms", "elderly osteoarthritis symptoms",
    "elderly dementia symptoms", "elderly Alzheimer symptoms", "elderly vascular dementia symptoms",
    "elderly Lewy body dementia symptoms", "elderly frontotemporal dementia symptoms",
    "elderly Parkinson symptoms", "elderly Parkinson plus symptoms", "elderly tremor",
    "elderly rigidity", "elderly bradykinesia", "elderly postural instability", "elderly incontinence",
    "elderly urinary incontinence", "elderly fecal incontinence", "elderly constipation",
    "elderly dehydration", "elderly malnutrition", "elderly weight loss", "elderly pressure ulcers",
    "elderly skin tears", "elderly bruising", "elderly shingles", "elderly postherpetic neuralgia",
    "elderly vision loss", "elderly hearing loss", "elderly dizziness", "elderly vertigo",
    "elderly syncope", "elderly orthostatic hypotension", "elderly postprandial hypotension",
    "elderly carotid sinus hypersensitivity", "elderly vasovagal symptoms", "elderly polypharmacy",
    "elderly medication side effects", "elderly drug interactions", "elderly delirium",
    "elderly sundowning", "elderly agitation", "elderly aggression", "elderly wandering",
    "elderly hoarding", "elderly apathy", "elderly depression", "elderly anxiety", "elderly psychosis",
    "elderly paranoia", "elderly hallucinations", "elderly sleep disturbance", "elderly insomnia",
    "elderly hypersomnia", "elderly circadian rhythm disturbance", "elderly REM sleep disorder",
    
    // Pregnancy Symptoms
    "pregnancy nausea", "pregnancy vomiting", "morning sickness", "hyperemesis gravidarum",
    "pregnancy fatigue", "pregnancy breast changes", "pregnancy breast tenderness",
    "pregnancy areola darkening", "pregnancy Montgomery tubercles", "pregnancy linea nigra",
    "pregnancy striae gravidarum", "pregnancy melasma", "pregnancy chloasma", "pregnancy mask of pregnancy",
    "pregnancy vascular changes", "pregnancy spider angiomas", "pregnancy palmar erythema",
    "pregnancy edema", "pregnancy carpal tunnel syndrome", "pregnancy back pain",
    "pregnancy pelvic pain", "pregnancy round ligament pain", "pregnancy symphysis pubis dysfunction",
    "pregnancy sciatica", "pregnancy leg cramps", "pregnancy restless legs", "pregnancy shortness of breath",
    "pregnancy dyspnea", "pregnancy nasal congestion", "pregnancy rhinitis", "pregnancy epistaxis",
    "pregnancy gum bleeding", "pregnancy pyalism", "pregnancy excessive salivation",
    "pregnancy food aversions", "pregnancy food cravings", "pregnancy pica", "pregnancy heartburn",
    "pregnancy acid reflux", "pregnancy indigestion", "pregnancy constipation", "pregnancy hemorrhoids",
    "pregnancy varicose veins", "pregnancy vulvar varicosities", "pregnancy increased urination",
    "pregnancy urinary frequency", "pregnancy urinary incontinence", "pregnancy Braxton Hicks contractions",
    "pregnancy false labor", "pregnancy lightening", "pregnancy dropping", "pregnancy nesting instinct",
    "pregnancy bloody show", "pregnancy mucus plug", "pregnancy water breaking", "pregnancy labor symptoms",
    "pregnancy contractions", "pregnancy back labor", "pregnancy transition symptoms",
    "pregnancy pushing phase", "pregnancy delivery", "pregnancy postpartum symptoms",
    "pregnancy postpartum bleeding", "pregnancy afterpains", "pregnancy perineal pain",
    "pregnancy breastfeeding symptoms", "pregnancy engorgement", "pregnancy mastitis symptoms",
    
    // Menopause Symptoms
    "perimenopause symptoms", "menopause symptoms", "postmenopause symptoms", "menopause hot flashes",
    "menopause night sweats", "menopause sleep disturbances", "menopause mood changes",
    "menopause irritability", "menopause anxiety", "menopause depression", "menopause brain fog",
    "menopause memory problems", "menopause concentration problems", "menopause vaginal dryness",
    "menopause vaginal atrophy", "menopause dyspareunia", "menopause decreased libido",
    "menopause urinary symptoms", "menopause urinary frequency", "menopause urinary urgency",
    "menopause UTI symptoms", "menopause incontinence", "menopause skin changes",
    "menopause hair thinning", "menopause hair loss", "menopause weight gain", "menopause metabolism changes",
    "menopause joint pain", "menopause muscle pain", "menopause bone loss", "menopause osteoporosis symptoms",
    "menopause heart palpitations", "menopause racing heart", "menopause dizziness",
    "menopause headaches", "menopause migraine", "menopause allergy symptoms", "menopause digestive changes",
    "menopause bloating", "menopause gas", "menopause indigestion", "menopause acid reflux",
    
    // Emergency Symptoms (Red Flags)
    "sudden severe headache", "worst headache of life", "sudden vision loss", "sudden double vision",
    "sudden speech difficulty", "sudden facial drooping", "sudden arm weakness", "sudden leg weakness",
    "sudden numbness", "sudden paralysis", "sudden confusion", "sudden difficulty understanding",
    "sudden difficulty walking", "sudden loss of balance", "sudden severe dizziness", "sudden fainting",
    "cardiac arrest symptoms", "heart attack symptoms", "crushing chest pain", "chest pressure radiating",
    "arm pain radiating", "jaw pain radiating", "back pain radiating", "sudden severe shortness of breath",
    "gasping for air", "choking", "inability to breathe", "turning blue", "cyanosis",
    "severe allergic reaction", "anaphylaxis symptoms", "throat closing", "tongue swelling",
    "severe bleeding", "uncontrolled bleeding", "massive hemorrhage", "hypovolemic shock symptoms",
    "severe head injury", "loss of consciousness", "concussion symptoms", "seizure lasting more than 5 minutes",
    "multiple seizures", "status epilepticus", "severe burn", "electrical injury", "lightning strike",
    "drowning symptoms", "near drowning", "hypothermia symptoms", "hyperthermia symptoms", "heat stroke",
    "severe dehydration", "altered mental status", "unresponsiveness", "coma symptoms",
    "overdose symptoms", "poisoning symptoms", "toxic ingestion", "carbon monoxide poisoning symptoms",
    "severe abdominal pain", "rigid abdomen", "board-like abdomen", "peritonitis symptoms",
    "severe vomiting", "vomiting blood", "coffee ground emesis", "massive hematemesis",
    "severe diarrhea", "bloody diarrhea", "dysentery symptoms", "severe dehydration symptoms",
    "severe infection symptoms", "sepsis symptoms", "septic shock", "meningitis symptoms",
    "neck stiffness", "photophobia", "phonophobia", "Kernig sign", "Brudzinski sign",
    "severe trauma", "multiple injuries", "poly trauma", "crush injury", "blast injury",
    
    // Additional Symptoms (to reach 2000)
    "abdominal aortic aneurysm symptoms", "aortic dissection symptoms", "carotid artery disease symptoms",
    "peripheral artery disease symptoms", "Raynaud phenomenon", "Buerger disease symptoms",
    "vasculitis symptoms", "giant cell arteritis symptoms", "polymyalgia rheumatica symptoms",
    "fibromyalgia symptoms", "chronic fatigue syndrome symptoms", "myofascial pain syndrome symptoms",
    "TMJ disorder symptoms", "bruxism symptoms", "sleep bruxism", "awake bruxism",
    "dental caries symptoms", "pulpitis symptoms", "periapical abscess symptoms", "pericoronitis symptoms",
    "dry socket symptoms", "oral thrush symptoms", "geographic tongue", "fissured tongue",
    "black hairy tongue", "burning mouth syndrome", "xerostomia", "Sjogren syndrome symptoms",
    "Bell palsy symptoms", "Ramsay Hunt syndrome symptoms", "acoustic neuroma symptoms",
    "Meniere disease symptoms", "labyrinthitis symptoms", "vestibular neuritis symptoms",
    "BPPV symptoms", "motion sickness symptoms", "altitude sickness symptoms", "decompression sickness symptoms",
    "dysbarism symptoms", "barotrauma symptoms", "sinus barotrauma", "ear barotrauma",
    "dental barotrauma", "pneumothorax symptoms", "hemothorax symptoms", "chylothorax symptoms",
    "pleural effusion symptoms", "empyema symptoms", "lung abscess symptoms", "bronchiectasis symptoms",
    "COPD symptoms", "emphysema symptoms", "chronic bronchitis symptoms", "asthma exacerbation",
    "pneumonia symptoms", "bronchopneumonia symptoms", "lobar pneumonia symptoms", "interstitial pneumonia symptoms",
    "aspiration pneumonia symptoms", "chemical pneumonitis symptoms", "hypersensitivity pneumonitis symptoms",
    "pulmonary fibrosis symptoms", "interstitial lung disease symptoms", "sarcoidosis symptoms",
    "pulmonary hypertension symptoms", "cor pulmonale symptoms", "congestive heart failure symptoms",
    "left heart failure symptoms", "right heart failure symptoms", "biventricular failure symptoms",
    "cardiomyopathy symptoms", "dilated cardiomyopathy", "hypertrophic cardiomyopathy",
    "restrictive cardiomyopathy", "arrhythmogenic cardiomyopathy", "myocarditis symptoms",
    "pericarditis symptoms", "constrictive pericarditis symptoms", "cardiac tamponade symptoms",
    "infective endocarditis symptoms", "rheumatic heart disease symptoms", "valvular heart disease symptoms",
    "aortic stenosis symptoms", "aortic regurgitation symptoms", "mitral stenosis symptoms",
    "mitral regurgitation symptoms", "mitral valve prolapse symptoms", "tricuspid stenosis symptoms",
    "tricuspid regurgitation symptoms", "pulmonic stenosis symptoms", "pulmonic regurgitation symptoms",
    "hypertensive heart disease symptoms", "ischemic heart disease symptoms", "stable angina symptoms",
    "unstable angina symptoms", "Prinzmetal angina symptoms", "silent ischemia symptoms",
    "acute coronary syndrome symptoms", "NSTEMI symptoms", "STEMI symptoms", "sudden cardiac death symptoms",
    "cardiac arrest symptoms", "heart block symptoms", "first degree heart block", "second degree heart block",
    "Mobitz type I", "Mobitz type II", "third degree heart block", "bundle branch block symptoms",
    "LBBB symptoms", "RBBB symptoms", "atrial fibrillation symptoms", "atrial flutter symptoms",
    "supraventricular tachycardia symptoms", "ventricular tachycardia symptoms", "ventricular fibrillation symptoms",
    "long QT syndrome symptoms", "Brugada syndrome symptoms", "catecholaminergic polymorphic VT symptoms",
    "sinus node dysfunction symptoms", "sick sinus syndrome symptoms", "tachy-brady syndrome symptoms",
    "carotid sinus syndrome symptoms", "vasovagal syncope symptoms", "situational syncope symptoms",
    "micturition syncope", "defecation syncope", "cough syncope", "swallow syncope",
    "postural orthostatic tachycardia syndrome symptoms", "POTS symptoms", "autonomic dysfunction symptoms",
    "dysautonomia symptoms", "neurocardiogenic syncope symptoms", "reflex syncope symptoms",
    "orthostatic intolerance symptoms", "chronic venous insufficiency symptoms", "venous stasis symptoms",
    "venous stasis ulcers", "arterial ulcers", "neuropathic ulcers", "diabetic foot ulcers",
    "pressure ulcers stages", "stage 1 pressure ulcer", "stage 2 pressure ulcer", "stage 3 pressure ulcer",
    "stage 4 pressure ulcer", "unstageable pressure ulcer", "deep tissue injury", "wound infection symptoms",
    "cellulitis symptoms", "erysipelas symptoms", "necrotizing fasciitis symptoms", "Fournier gangrene symptoms",
    "gas gangrene symptoms", "tetanus symptoms", "botulism symptoms", "rabies symptoms",
    "Lyme disease symptoms", "early Lyme disease", "disseminated Lyme disease", "late Lyme disease",
    "chronic Lyme disease symptoms", "Rocky Mountain spotted fever symptoms", "ehrlichiosis symptoms",
    "anaplasmosis symptoms", "babesiosis symptoms", "tularemia symptoms", "plague symptoms",
    "anthrax symptoms", "brucellosis symptoms", "leptospirosis symptoms", "rat-bite fever symptoms",
    "cat scratch disease symptoms", "bartonellosis symptoms", "Q fever symptoms", "typhus symptoms",
    "scrub typhus symptoms", "murine typhus symptoms", "epidemic typhus symptoms", "malaria symptoms",
    "falciparum malaria symptoms", "vivax malaria symptoms", "ovale malaria symptoms", "malariae malaria symptoms",
    "knowlesi malaria symptoms", "cerebral malaria symptoms", "blackwater fever symptoms",
    "dengue fever symptoms", "dengue hemorrhagic fever symptoms", "dengue shock syndrome symptoms",
    "chikungunya symptoms", "Zika virus symptoms", "yellow fever symptoms", "West Nile virus symptoms",
    "Japanese encephalitis symptoms", "St. Louis encephalitis symptoms", "Eastern equine encephalitis symptoms",
    "Western equine encephalitis symptoms", "Venezuelan equine encephalitis symptoms",
    "La Crosse encephalitis symptoms", "California encephalitis symptoms", "Powassan virus symptoms",
    "tick-borne encephalitis symptoms", "Rift Valley fever symptoms", "Crimean-Congo hemorrhagic fever symptoms",
    "Ebola virus symptoms", "Marburg virus symptoms", "Lassa fever symptoms", "South American hemorrhagic fever symptoms",
    "Hantavirus pulmonary syndrome symptoms", "Hantavirus hemorrhagic fever with renal syndrome symptoms",
    "influenza symptoms", "influenza A symptoms", "influenza B symptoms", "influenza C symptoms",
    "avian influenza symptoms", "H5N1 symptoms", "H7N9 symptoms", "swine influenza symptoms", "H1N1 symptoms",
    "parainfluenza symptoms", "RSV symptoms", "respiratory syncytial virus symptoms",
    "adenovirus symptoms", "rhinovirus symptoms", "enterovirus symptoms", "EV-D68 symptoms",
    "coxsackievirus symptoms", "hand foot mouth disease symptoms", "herpangina symptoms",
    "EBV symptoms", "Epstein-Barr virus symptoms", "infectious mononucleosis symptoms",
    "CMV symptoms", "cytomegalovirus symptoms", "HHV-6 symptoms", "roseola symptoms",
    "HHV-7 symptoms", "HHV-8 symptoms", "Kaposi sarcoma symptoms", "VZV symptoms",
    "varicella symptoms", "chickenpox symptoms", "herpes zoster symptoms", "shingles symptoms",
    "HSV-1 symptoms", "HSV-2 symptoms", "genital herpes symptoms", "oral herpes symptoms",
    "herpetic whitlow symptoms", "eczema herpeticum symptoms", "herpes gladiatorum symptoms",
    "molluscum contagiosum symptoms", "warts symptoms", "common warts", "plantar warts",
    "flat warts", "filiform warts", "genital warts symptoms", "HPV symptoms", "HPV types",
    "cervical dysplasia symptoms", "anal dysplasia symptoms", "penile dysplasia symptoms",
    "vulvar dysplasia symptoms", "vaginal dysplasia symptoms", "oral dysplasia symptoms",
    "HIV symptoms", "acute HIV symptoms", "chronic HIV symptoms", "AIDS symptoms",
    "HIV wasting syndrome symptoms", "HIV-associated dementia symptoms", "HIV neuropathy symptoms",
    "AIDS-defining illnesses symptoms", "PJP pneumonia symptoms", "Pneumocystis pneumonia symptoms",
    "cryptococcal meningitis symptoms", "toxoplasmosis encephalitis symptoms", "MAC symptoms",
    "Mycobacterium avium complex symptoms", "CMV retinitis symptoms", "cryptosporidiosis symptoms",
    "isosporiasis symptoms", "microsporidiosis symptoms", "bacillary angiomatosis symptoms",
    "progressive multifocal leukoencephalopathy symptoms", "PML symptoms", "primary effusion lymphoma symptoms",
    "HIV-associated nephropathy symptoms", "HIV-associated cardiomyopathy symptoms",
    "hepatitis A symptoms", "hepatitis B symptoms", "hepatitis C symptoms", "hepatitis D symptoms",
    "hepatitis E symptoms", "autoimmune hepatitis symptoms", "alcoholic hepatitis symptoms",
    "nonalcoholic steatohepatitis symptoms", "NASH symptoms", "cirrhosis symptoms",
    "compensated cirrhosis symptoms", "decompensated cirrhosis symptoms", "ascites symptoms",
    "spontaneous bacterial peritonitis symptoms", "variceal bleeding symptoms", "hepatic encephalopathy symptoms",
    "hepatorenal syndrome symptoms", "hepatopulmonary syndrome symptoms", "portal hypertension symptoms",
    "Budd-Chiari syndrome symptoms", "veno-occlusive disease symptoms", "gallstones symptoms",
    "cholelithiasis symptoms", "biliary colic symptoms", "cholecystitis symptoms", "acute cholecystitis",
    "chronic cholecystitis symptoms", "acalculous cholecystitis symptoms", "choledocholithiasis symptoms",
    "cholangiitis symptoms", "ascending cholangitis symptoms", "primary sclerosing cholangitis symptoms",
    "primary biliary cholangitis symptoms", "PBC symptoms", "gallbladder polyps symptoms",
    "gallbladder cancer symptoms", "pancreatitis symptoms", "acute pancreatitis symptoms",
    "chronic pancreatitis symptoms", "autoimmune pancreatitis symptoms", "hereditary pancreatitis symptoms",
    "pancreatic pseudocyst symptoms", "pancreatic necrosis symptoms", "pancreatic cancer symptoms",
    "pancreatic neuroendocrine tumor symptoms", "insulinoma symptoms", "glucagonoma symptoms",
    "somatostatinoma symptoms", "VIPoma symptoms", "PPoma symptoms", "gastrinoma symptoms",
    "Zollinger-Ellison syndrome symptoms", "MEN syndromes symptoms", "MEN type 1 symptoms",
    "MEN type 2 symptoms", "MEN type 2A symptoms", "MEN type 2B symptoms", "pheochromocytoma symptoms",
    "paraganglioma symptoms", "neuroblastoma symptoms", "ganglioneuroblastoma symptoms",
    "ganglioneuroma symptoms", "adrenal incidentaloma symptoms", "adrenal insufficiency symptoms",
    "Addison disease symptoms", "primary adrenal insufficiency symptoms", "secondary adrenal insufficiency symptoms",
    "tertiary adrenal insufficiency symptoms", "adrenal crisis symptoms", "Cushing syndrome symptoms",
    "Cushing disease symptoms", "adrenal Cushing syndrome symptoms", "ectopic ACTH syndrome symptoms",
    "hyperaldosteronism symptoms", "primary hyperaldosteronism symptoms", "Conn syndrome symptoms",
    "secondary hyperaldosteronism symptoms", "congenital adrenal hyperplasia symptoms",
    "CAH symptoms", "21-hydroxylase deficiency symptoms", "11-hydroxylase deficiency symptoms",
    "17-hydroxylase deficiency symptoms", "3-beta-hydroxysteroid dehydrogenase deficiency symptoms",
    "lipoid CAH symptoms", "adrenal myelolipoma symptoms", "adrenocortical carcinoma symptoms",
    
    // Final batch to reach exactly 2000
    "thyroiditis symptoms", "Hashimoto thyroiditis symptoms", "Graves disease symptoms",
    "subacute thyroiditis symptoms", "de Quervain thyroiditis symptoms", "silent thyroiditis symptoms",
    "postpartum thyroiditis symptoms", "suppurative thyroiditis symptoms", "Riedel thyroiditis symptoms",
    "hyperthyroidism symptoms", "thyrotoxicosis symptoms", "thyrotoxic periodic paralysis symptoms",
    "thyroid storm symptoms", "hypothyroidism symptoms", "myxedema symptoms", "myxedema coma symptoms",
    "euthyroid sick syndrome symptoms", "thyroid nodule symptoms", "thyroid cancer symptoms",
    "papillary thyroid cancer symptoms", "follicular thyroid cancer symptoms", "Hurthle cell cancer symptoms",
    "medullary thyroid cancer symptoms", "anaplastic thyroid cancer symptoms", "thyroid lymphoma symptoms",
    "parathyroid disease symptoms", "hyperparathyroidism symptoms", "primary hyperparathyroidism symptoms",
    "secondary hyperparathyroidism symptoms", "tertiary hyperparathyroidism symptoms",
    "hypoparathyroidism symptoms", "pseudohypoparathyroidism symptoms", "pseudopseudohypoparathyroidism symptoms",
    "calcium disorders symptoms", "hypercalcemia symptoms", "hypocalcemia symptoms",
    "phosphate disorders symptoms", "hyperphosphatemia symptoms", "hypophosphatemia symptoms",
    "magnesium disorders symptoms", "hypermagnesemia symptoms", "hypomagnesemia symptoms",
    "sodium disorders symptoms", "hypernatremia symptoms", "hyponatremia symptoms",
    "potassium disorders symptoms", "hyperkalemia symptoms", "hypokalemia symptoms",
    "acid-base disorders symptoms", "metabolic acidosis symptoms", "metabolic alkalosis symptoms",
    "respiratory acidosis symptoms", "respiratory alkalosis symptoms", "mixed acid-base disorders symptoms",
    "diabetes mellitus symptoms", "type 1 diabetes symptoms", "type 2 diabetes symptoms",
    "LADA symptoms", "MODY symptoms", "gestational diabetes symptoms", "diabetic ketoacidosis symptoms",
    "DKA symptoms", "hyperosmolar hyperglycemic state symptoms", "HHS symptoms",
    "diabetic hypoglycemia symptoms", "Somogyi phenomenon symptoms", "dawn phenomenon symptoms",
    "diabetic complications symptoms", "diabetic retinopathy symptoms", "diabetic nephropathy symptoms",
    "diabetic neuropathy symptoms", "diabetic autonomic neuropathy symptoms", "diabetic gastroparesis symptoms",
    "diabetic foot symptoms", "diabetic foot infection symptoms", "Charcot foot symptoms",
    "diabetic skin complications symptoms", "necrobiosis lipoidica symptoms", "diabetic dermopathy symptoms",
    "acanthosis nigricans symptoms", "lipodystrophy symptoms", "metabolic syndrome symptoms",
    "insulin resistance symptoms", "hyperinsulinemia symptoms", "obesity symptoms",
    "overweight symptoms", "morbid obesity symptoms", "bariatric surgery complications symptoms",
    "dumping syndrome symptoms", "nutritional deficiencies symptoms", "vitamin deficiencies symptoms",
    "vitamin A deficiency symptoms", "vitamin B deficiency symptoms", "thiamine deficiency symptoms",
    "beriberi symptoms", "Wernicke encephalopathy symptoms", "Korsakoff syndrome symptoms",
    "riboflavin deficiency symptoms", "niacin deficiency symptoms", "pellagra symptoms",
    "vitamin B6 deficiency symptoms", "biotin deficiency symptoms", "folate deficiency symptoms",
    "vitamin B12 deficiency symptoms", "pernicious anemia symptoms", "vitamin C deficiency symptoms",
    "scurvy symptoms", "vitamin D deficiency symptoms", "rickets symptoms", "osteomalacia symptoms",
    "vitamin E deficiency symptoms", "vitamin K deficiency symptoms", "mineral deficiencies symptoms",
    "iron deficiency symptoms", "iron deficiency anemia symptoms", "zinc deficiency symptoms",
    "copper deficiency symptoms", "selenium deficiency symptoms", "iodine deficiency symptoms",
    "iodine deficiency disorders symptoms", "goiter symptoms", "cretinism symptoms",
    "protein-energy malnutrition symptoms", "kwashiorkor symptoms", "marasmus symptoms",
    "eating disorders symptoms", "anorexia nervosa symptoms", "bulimia nervosa symptoms",
    "binge eating disorder symptoms", "OSFED symptoms", "ARFID symptoms", "pica symptoms",
    "rumination disorder symptoms", "avoidant restrictive food intake disorder symptoms",
    "orthorexia symptoms", "nutritional excess symptoms", "hypervitaminosis A symptoms",
    "hypervitaminosis D symptoms", "iron overload symptoms", "hemochromatosis symptoms",
    "copper overload symptoms", "Wilson disease symptoms", "amyloidosis symptoms",
    "primary amyloidosis symptoms", "secondary amyloidosis symptoms", "hereditary amyloidosis symptoms",
    "localized amyloidosis symptoms", "porphyria symptoms", "acute intermittent porphyria symptoms",
    "porphyria cutanea tarda symptoms", "erythropoietic protoporphyria symptoms",
    "hereditary coproporphyria symptoms", "variegate porphyria symptoms", "ALAD deficiency porphyria symptoms",
    "lysosomal storage disorders symptoms", "Gaucher disease symptoms", "Niemann-Pick disease symptoms",
    "Fabry disease symptoms", "Krabbe disease symptoms", "Tay-Sachs disease symptoms",
    "Sandhoff disease symptoms", "metachromatic leukodystrophy symptoms", "Hurler syndrome symptoms",
    "Hunter syndrome symptoms", "Sanfilippo syndrome symptoms", "Morquio syndrome symptoms",
    "Maroteaux-Lamy syndrome symptoms", "Sly syndrome symptoms", "glycogen storage diseases symptoms",
    "von Gierke disease symptoms", "Pompe disease symptoms", "Cori disease symptoms",
    "McArdle disease symptoms", "Tarui disease symptoms", "Andersen disease symptoms",
    "Hers disease symptoms", "muscle glycogenosis symptoms", "mitochondrial diseases symptoms",
    "MELAS symptoms", "MERRF symptoms", "LHON symptoms", "Kearns-Sayre syndrome symptoms",
    "Pearson syndrome symptoms", "CPEO symptoms", "mitochondrial myopathy symptoms",
    "peroxisomal disorders symptoms", "Zellweger syndrome symptoms", "neonatal adrenoleukodystrophy symptoms",
    "X-linked adrenoleukodystrophy symptoms", "Refsum disease symptoms", "Rhizomelic chondrodysplasia punctata symptoms",  // Previous 2000 symptoms (as provided above) + additional 2009 symptoms below
    
    // Cardiovascular & Circulatory System
    "aortic coarctation symptoms", "supravalvular aortic stenosis", "subvalvular aortic stenosis", "bicuspid aortic valve symptoms",
    "Ebstein anomaly symptoms", "tetralogy of Fallot symptoms", "truncus arteriosus symptoms", "transposition of great arteries symptoms",
    "total anomalous pulmonary venous return symptoms", "hypoplastic left heart syndrome symptoms", "double outlet right ventricle symptoms",
    "pulmonary atresia symptoms", "tricuspid atresia symptoms", "single ventricle symptoms", "heterotaxy syndrome symptoms",
    "dextrocardia symptoms", "levocardia symptoms", "mesocardia symptoms", "ectopia cordis symptoms", "pericardial effusion symptoms",
    "pericardial cyst symptoms", "pericardial tumor symptoms", "cardiac hydatid cyst symptoms", "cardiac echinococcosis symptoms",
    "cardiac tuberculosis symptoms", "cardiac sarcoidosis symptoms", "cardiac amyloidosis symptoms", "cardiac hemochromatosis symptoms",
    "cardiac tumor symptoms", "atrial myxoma symptoms", "ventricular myxoma symptoms", "cardiac fibroma symptoms",
    "cardiac rhabdomyoma symptoms", "cardiac lipoma symptoms", "cardiac hemangioma symptoms", "cardiac paraganglioma symptoms",
    "cardiac lymphoma symptoms", "cardiac sarcoma symptoms", "angiosarcoma heart symptoms", "rhabdomyosarcoma heart symptoms",
    "fibrosarcoma heart symptoms", "leiomyosarcoma heart symptoms", "liposarcoma heart symptoms", "osteosarcoma heart symptoms",
    "chondrosarcoma heart symptoms", "Ewing sarcoma heart symptoms", "Kaposi sarcoma heart symptoms", "cardiac metastasis symptoms",
    "superior vena cava syndrome symptoms", "inferior vena cava syndrome symptoms", "vena cava thrombosis symptoms",
    "renal vein thrombosis symptoms", "hepatic vein thrombosis symptoms", "portal vein thrombosis symptoms", "mesenteric vein thrombosis symptoms",
    "splenic vein thrombosis symptoms", "ovarian vein thrombosis symptoms", "testicular vein thrombosis symptoms", "adrenal vein thrombosis symptoms",
    "cerebral venous sinus thrombosis symptoms", "cavernous sinus thrombosis symptoms", "sagittal sinus thrombosis symptoms",
    "transverse sinus thrombosis symptoms", "sigmoid sinus thrombosis symptoms", "internal jugular vein thrombosis symptoms",
    "subclavian vein thrombosis symptoms", "axillary vein thrombosis symptoms", "brachial vein thrombosis symptoms",
    "cephalic vein thrombosis symptoms", "basilic vein thrombosis symptoms", "median cubital vein thrombosis symptoms",
    "femoral vein thrombosis symptoms", "popliteal vein thrombosis symptoms", "peroneal vein thrombosis symptoms",
    "tibial vein thrombosis symptoms", "soleal vein thrombosis symptoms", "gastrocnemial vein thrombosis symptoms",
    "saphenous vein thrombosis symptoms", "May-Thurner syndrome symptoms", "Paget-Schroetter syndrome symptoms",
    "thoracic outlet syndrome symptoms", "costoclavicular syndrome symptoms", "hyperabduction syndrome symptoms",
    "scalenus anticus syndrome symptoms", "cervical rib syndrome symptoms", "first thoracic rib syndrome symptoms",
    "arterial thoracic outlet syndrome symptoms", "venous thoracic outlet syndrome symptoms", "neurogenic thoracic outlet syndrome symptoms",
    "Raynaud phenomenon primary", "Raynaud phenomenon secondary", "acrocyanosis symptoms", "livedo reticularis symptoms",
    "livedo racemosa symptoms", "erythromelalgia symptoms", "erythermalgia symptoms", "pernio symptoms", "chilblains symptoms",
    "perniosis symptoms", "frostnip symptoms", "immersion foot symptoms", "trench foot symptoms", "shelter foot symptoms",
    "peripheral arterial disease symptoms", "intermittent claudication symptoms", "critical limb ischemia symptoms",
    "acute limb ischemia symptoms", "chronic limb ischemia symptoms", "blue toe syndrome symptoms", "trash foot symptoms",
    "atheroembolism symptoms", "cholesterol emboli syndrome symptoms", "microemboli symptoms", "macroemboli symptoms",
    "paradoxical embolism symptoms", "fat embolism syndrome symptoms", "amniotic fluid embolism symptoms",
    "air embolism symptoms", "gas embolism symptoms", "thrombotic microangiopathy symptoms", "TTP symptoms",
    "HUS symptoms", "atypical HUS symptoms", "complement-mediated HUS symptoms", "STEC-HUS symptoms",
    "thrombotic thrombocytopenic purpura symptoms", "hemolytic uremic syndrome symptoms", "disseminated intravascular coagulation symptoms",
    "DIC symptoms", "consumptive coagulopathy symptoms", "coagulation factor deficiency symptoms", "hemophilia A symptoms",
    "hemophilia B symptoms", "hemophilia C symptoms", "von Willebrand disease symptoms", "factor I deficiency symptoms",
    "factor II deficiency symptoms", "factor V deficiency symptoms", "factor VII deficiency symptoms", "factor X deficiency symptoms",
    "factor XI deficiency symptoms", "factor XII deficiency symptoms", "factor XIII deficiency symptoms", "combined factor deficiencies symptoms",
    "vitamin K deficiency bleeding symptoms", "vitamin K dependent factor deficiency symptoms", "acquired coagulation disorders symptoms",
    "liver disease coagulopathy symptoms", "uremic bleeding symptoms", "dysfibrinogenemia symptoms", "hypofibrinogenemia symptoms",
    "afibrinogenemia symptoms", "hyperfibrinogenemia symptoms", "thrombophilia symptoms", "hereditary thrombophilia symptoms",
    "acquired thrombophilia symptoms", "factor V Leiden symptoms", "prothrombin gene mutation symptoms",
    "antithrombin deficiency symptoms", "protein C deficiency symptoms", "protein S deficiency symptoms",
    "activated protein C resistance symptoms", "hyperhomocysteinemia symptoms", "elevated factor VIII symptoms",
    "elevated factor IX symptoms", "elevated factor XI symptoms", "antiphospholipid syndrome symptoms",
    "APS symptoms", "Hughes syndrome symptoms", "lupus anticoagulant symptoms", "anticardiolipin antibodies symptoms",
    "anti-beta2 glycoprotein I antibodies symptoms", "platelet disorders symptoms", "thrombocytopenia symptoms",
    "immune thrombocytopenia symptoms", "ITP symptoms", "drug-induced thrombocytopenia symptoms", "heparin-induced thrombocytopenia symptoms",
    "HIT symptoms", "HITT symptoms", "thrombocytosis symptoms", "essential thrombocythemia symptoms",
    "reactive thrombocytosis symptoms", "platelet function disorders symptoms", "Bernard-Soulier syndrome symptoms",
    "Glanzmann thrombasthenia symptoms", "storage pool deficiency symptoms", "gray platelet syndrome symptoms",
    "Quebec platelet disorder symptoms", "Wiskott-Aldrich syndrome symptoms", "MYH9-related disorders symptoms",
    "May-Hegglin anomaly symptoms", "Fechtner syndrome symptoms", "Sebastian syndrome symptoms", "Epstein syndrome symptoms",
    "Alport syndrome symptoms", "leukocyte disorders symptoms", "neutropenia symptoms", "cyclic neutropenia symptoms",
    "severe congenital neutropenia symptoms", "Kostmann syndrome symptoms", "Shwachman-Diamond syndrome symptoms",
    "myelokathexis symptoms", "WHIM syndrome symptoms", "neutrophilia symptoms", "leukemoid reaction symptoms",
    "leukocyte adhesion deficiency symptoms", "LAD symptoms", "chronic granulomatous disease symptoms",
    "CGD symptoms", "myeloperoxidase deficiency symptoms", "Chediak-Higashi syndrome symptoms", "specific granule deficiency symptoms",
    
    // Respiratory System Advanced
    "upper airway cough syndrome symptoms", "chronic cough syndrome symptoms", "habit cough symptoms", "psychogenic cough symptoms",
    "somatic cough syndrome symptoms", "tic cough symptoms", "refractory chronic cough symptoms", "unexplained chronic cough symptoms",
    "cough hypersensitivity syndrome symptoms", "laryngeal hypersensitivity symptoms", "laryngeal paresthesia symptoms",
    "globus pharyngeus symptoms", "paradoxical vocal fold movement symptoms", "vocal cord dysfunction symptoms",
    "inducible laryngeal obstruction symptoms", "exercise-induced laryngeal obstruction symptoms", "irritable larynx syndrome symptoms",
    "laryngospasm symptoms", "bronchospasm symptoms", "exercise-induced bronchoconstriction symptoms", "occupational asthma symptoms",
    "work-exacerbated asthma symptoms", "allergic bronchopulmonary aspergillosis symptoms", "ABPA symptoms",
    "allergic bronchopulmonary mycosis symptoms", "ABPM symptoms", "eosinophilic pneumonia symptoms", "acute eosinophilic pneumonia symptoms",
    "chronic eosinophilic pneumonia symptoms", "eosinophilic granulomatosis with polyangiitis symptoms", "Churg-Strauss syndrome symptoms",
    "hypereosinophilic syndrome symptoms", "Loeffler syndrome symptoms", "tropical pulmonary eosinophilia symptoms",
    "pulmonary alveolar proteinosis symptoms", "PAP symptoms", "autoimmune PAP symptoms", "secondary PAP symptoms",
    "congenital PAP symptoms", "pulmonary alveolar microlithiasis symptoms", "pulmonary alveolar phospholipoproteinosis symptoms",
    "pulmonary alveolar hemorrhage symptoms", "diffuse alveolar hemorrhage symptoms", "DAH symptoms",
    "Goodpasture syndrome symptoms", "anti-GBM disease symptoms", "ANCA-associated vasculitis symptoms",
    "granulomatosis with polyangiitis symptoms", "GPA symptoms", "Wegener granulomatosis symptoms",
    "eosinophilic granulomatosis with polyangiitis symptoms", "EGPA symptoms", "microscopic polyangiitis symptoms",
    "MPA symptoms", "pulmonary hemosiderosis symptoms", "idiopathic pulmonary hemosiderosis symptoms",
    "Heiner syndrome symptoms", "pulmonary lymphangioleiomyomatosis symptoms", "LAM symptoms",
    "sporadic LAM symptoms", "TSC-LAM symptoms", "lymphangioleiomyomatosis symptoms", "pulmonary Langerhans cell histiocytosis symptoms",
    "PLCH symptoms", "eosinophilic granuloma lung symptoms", "pulmonary histiocytosis X symptoms",
    "pulmonary amyloidosis symptoms", "tracheobronchial amyloidosis symptoms", "nodular pulmonary amyloidosis symptoms",
    "diffuse alveolar septal amyloidosis symptoms", "pulmonary light chain deposition disease symptoms",
    "pulmonary ALH amyloidosis symptoms", "pulmonary hyalinizing granuloma symptoms", "inflammatory myofibroblastic tumor lung symptoms",
    "plasma cell granuloma lung symptoms", "pulmonary nodular lymphoid hyperplasia symptoms", "pulmonary MALT lymphoma symptoms",
    "bronchus-associated lymphoid tissue symptoms", "BALT lymphoma symptoms", "pulmonary marginal zone lymphoma symptoms",
    "pulmonary lymphoma symptoms", "primary pulmonary lymphoma symptoms", "secondary pulmonary lymphoma symptoms",
    "pulmonary NK/T-cell lymphoma symptoms", "pulmonary Hodgkin lymphoma symptoms", "pulmonary lymphomatoid granulomatosis symptoms",
    "pulmonary post-transplant lymphoproliferative disorder symptoms", "PTLD lung symptoms", "pulmonary Kaposi sarcoma symptoms",
    "pulmonary angiosarcoma symptoms", "pulmonary epithelioid hemangioendothelioma symptoms", "PEH lung symptoms",
    "pulmonary artery sarcoma symptoms", "pulmonary vein sarcoma symptoms", "pleuropulmonary blastoma symptoms",
    "PPB symptoms", "type I PPB symptoms", "type II PPB symptoms", "type III PPB symptoms", "pulmonary blastoma symptoms",
    "pleuropulmonary blastoma symptoms", "cystic nephroma symptoms", "cystic hamartoma lung symptoms",
    "pulmonary hamartoma symptoms", "chondroid hamartoma lung symptoms", "pulmonary leiomyoma symptoms",
    "pulmonary fibroma symptoms", "pulmonary lipoma symptoms", "pulmonary hemangioma symptoms", "pulmonary lymphangioma symptoms",
    "pulmonary granular cell tumor symptoms", "pulmonary clear cell tumor symptoms", "pulmonary sugar tumor symptoms",
    "PEComa lung symptoms", "pulmonary meningioma symptoms", "pulmonary schwannoma symptoms", "pulmonary neurofibroma symptoms",
    "pulmonary paraganglioma symptoms", "pulmonary glomus tumor symptoms", "pulmonary thymoma symptoms",
    "pulmonary germ cell tumor symptoms", "pulmonary teratoma symptoms", "pulmonary yolk sac tumor symptoms",
    "pulmonary choriocarcinoma symptoms", "pulmonary embryonal carcinoma symptoms", "pulmonary seminoma symptoms",
    "pulmonary dysgerminoma symptoms", "pulmonary hydatid cyst symptoms", "pulmonary echinococcosis symptoms",
    "pulmonary cystic echinococcosis symptoms", "pulmonary alveolar echinococcosis symptoms", "pulmonary amebiasis symptoms",
    "pulmonary ascariasis symptoms", "pulmonary toxocariasis symptoms", "visceral larva migrans lung symptoms",
    "pulmonary strongyloidiasis symptoms", "pulmonary filariasis symptoms", "tropical pulmonary eosinophilia symptoms",
    "pulmonary dirofilariasis symptoms", "pulmonary schistosomiasis symptoms", "pulmonary paragonimiasis symptoms",
    "lung fluke symptoms", "pulmonary clonorchiasis symptoms", "pulmonary fascioliasis symptoms",
    "pulmonary cryptococcosis symptoms", "pulmonary cryptococcal infection symptoms", "pulmonary candidiasis symptoms",
    "pulmonary aspergillosis symptoms", "invasive pulmonary aspergillosis symptoms", "chronic pulmonary aspergillosis symptoms",
    "aspergilloma symptoms", "fungus ball lung symptoms", "pulmonary mucormycosis symptoms", "pulmonary zygomycosis symptoms",
    "pulmonary histoplasmosis symptoms", "pulmonary blastomycosis symptoms", "pulmonary coccidioidomycosis symptoms",
    "valley fever symptoms", "pulmonary paracoccidioidomycosis symptoms", "pulmonary sporotrichosis symptoms",
    "pulmonary talaromycosis symptoms", "penicilliosis lung symptoms", "pulmonary pneumocystosis symptoms",
    "pulmonary nocardiosis symptoms", "pulmonary actinomycosis symptoms", "pulmonary mycetoma symptoms",
    "pulmonary eumycetoma symptoms", "pulmonary actinomycetoma symptoms", "pulmonary botryomycosis symptoms",
    "pulmonary rhinosporidiosis symptoms", "pulmonary protothecosis symptoms",
    
    // Digestive System Advanced
    "esophageal atresia symptoms", "tracheoesophageal fistula symptoms", "TEF symptoms", "esophageal web symptoms",
    "esophageal ring symptoms", "Schatzki ring symptoms", "esophageal diverticulum symptoms", "Zenker diverticulum symptoms",
    "mid-esophageal diverticulum symptoms", "epiphrenic diverticulum symptoms", "esophageal intramural pseudodiverticulosis symptoms",
    "esophageal duplication cyst symptoms", "bronchogenic cyst symptoms", "esophageal bronchogenic cyst symptoms",
    "esophageal leiomyoma symptoms", "esophageal GIST symptoms", "esophageal gastrointestinal stromal tumor symptoms",
    "esophageal schwannoma symptoms", "esophageal granular cell tumor symptoms", "esophageal hemangioma symptoms",
    "esophageal lymphangioma symptoms", "esophageal melanoma symptoms", "esophageal small cell carcinoma symptoms",
    "esophageal large cell carcinoma symptoms", "esophageal adenosquamous carcinoma symptoms", "esophageal adenoid cystic carcinoma symptoms",
    "esophageal mucoepidermoid carcinoma symptoms", "esophageal carcinosarcoma symptoms", "esophageal spindle cell carcinoma symptoms",
    "esophageal verrucous carcinoma symptoms", "esophageal basaloid squamous cell carcinoma symptoms",
    "esophageal lymphoepithelioma-like carcinoma symptoms", "esophageal choriocarcinoma symptoms",
    "esophageal yolk sac tumor symptoms", "esophageal teratoma symptoms", "esophageal rhabdomyosarcoma symptoms",
    "esophageal Kaposi sarcoma symptoms", "esophageal metastasis symptoms", "stomach polyps symptoms",
    "gastric polyps symptoms", "fundic gland polyps symptoms", "hyperplastic polyps stomach symptoms",
    "adenomatous polyps stomach symptoms", "gastric adenoma symptoms", "gastric neuroendocrine tumor symptoms",
    "gastric carcinoid symptoms", "gastric GIST symptoms", "gastric leiomyoma symptoms", "gastric schwannoma symptoms",
    "gastric granular cell tumor symptoms", "gastric lipoma symptoms", "gastric hemangioma symptoms",
    "gastric lymphangioma symptoms", "gastric lymphoma symptoms", "MALT lymphoma stomach symptoms",
    "diffuse large B-cell lymphoma stomach symptoms", "gastric adenocarcinoma symptoms", "intestinal type gastric cancer symptoms",
    "diffuse type gastric cancer symptoms", "signet ring cell carcinoma symptoms", "limits plastica symptoms",
    "gastric cardia cancer symptoms", "gastric stump cancer symptoms", "gastric remnant cancer symptoms",
    "small intestine cancer symptoms", "duodenal cancer symptoms", "jejunal cancer symptoms", "ileal cancer symptoms",
    "small intestine adenocarcinoma symptoms", "duodenal adenocarcinoma symptoms", "jejunal adenocarcinoma symptoms",
    "ileal adenocarcinoma symptoms", "small intestine neuroendocrine tumor symptoms", "duodenal carcinoid symptoms",
    "jejunal carcinoid symptoms", "ileal carcinoid symptoms", "small intestine GIST symptoms", "duodenal GIST symptoms",
    "jejunal GIST symptoms", "ileal GIST symptoms", "small intestine lymphoma symptoms", "duodenal lymphoma symptoms",
    "jejunal lymphoma symptoms", "ileal lymphoma symptoms", "immunoproliferative small intestine disease symptoms",
    "IPSID symptoms", "Mediterranean lymphoma symptoms", "small intestine sarcoma symptoms", "duodenal sarcoma symptoms",
    "jejunal sarcoma symptoms", "ileal sarcoma symptoms", "small intestine metastasis symptoms", "Meckel diverticulum symptoms",
    "Meckel diverticulitis symptoms", "Meckel diverticulum bleeding symptoms", "Meckel diverticulum perforation symptoms",
    "Meckel diverticulum obstruction symptoms", "small intestine diverticulosis symptoms", "duodenal diverticulosis symptoms",
    "jejunal diverticulosis symptoms", "ileal diverticulosis symptoms", "small intestine diverticulitis symptoms",
    "duodenal diverticulitis symptoms", "jejunal diverticulitis symptoms", "ileal diverticulitis symptoms",
    "small intestine volvulus symptoms", "duodenal volvulus symptoms", "jejunal volvulus symptoms", "ileal volvulus symptoms",
    "small intestine intussusception symptoms", "duodenal intussusception symptoms", "jejunal intussusception symptoms",
    "ileal intussusception symptoms", "small intestine ischemia symptoms", "acute mesenteric ischemia symptoms",
    "chronic mesenteric ischemia symptoms", "mesenteric angina symptoms", "non-occlusive mesenteric ischemia symptoms",
    "NOMI symptoms", "mesenteric venous thrombosis symptoms", "superior mesenteric artery syndrome symptoms",
    "SMA syndrome symptoms", "Wilkie syndrome symptoms", "cast syndrome symptoms", "duodenal compression syndrome symptoms",
    "celiac artery compression syndrome symptoms", "median arcuate ligament syndrome symptoms", "MALS symptoms",
    "Dunbar syndrome symptoms", "nutcracker syndrome symptoms", "left renal vein entrapment symptoms",
    "nutcracker esophagus symptoms", "jackhammer esophagus symptoms", "hypercontractile esophagus symptoms",
    "distal esophageal spasm symptoms", "DES symptoms", "esophageal hypercontractility symptoms",
    "esophageal hypocontractility symptoms", "ineffective esophageal motility symptoms", "IEM symptoms",
    "fragmented peristalsis symptoms", "absent contractility symptoms", "EGJ outflow obstruction symptoms",
    "esophagogastric junction outflow obstruction symptoms", "achalasia symptoms", "type I achalasia symptoms",
    "type II achalasia symptoms", "type III achalasia symptoms", "vigorous achalasia symptoms",
    "esophagogastric junction outflow obstruction symptoms", "opening abnormalities EGJ symptoms",
    "esophageal hypomotility symptoms", "esophageal hypermotility symptoms", "rumination syndrome symptoms",
    "cyclic vomiting syndrome symptoms", "CVS symptoms", "cannabinoid hyperemesis syndrome symptoms",
    "CHS symptoms", "gastroparesis symptoms", "diabetic gastroparesis symptoms", "postsurgical gastroparesis symptoms",
    "idiopathic gastroparesis symptoms", "gastroparesis-like syndrome symptoms", "functional dyspepsia symptoms",
    "postprandial distress syndrome symptoms", "PDS symptoms", "epigastric pain syndrome symptoms",
    "EPS symptoms", "functional heartburn symptoms", "reflux hypersensitivity symptoms",
    "Aarskog-Scott syndrome facial features", "Aase-Smith syndrome joint contractures", "ABCD syndrome albinism", "Acrocallosal syndrome polydactyly",
    "Acrocephalopolydactylous dysplasia", "Acrofacial dysostosis Cincinnati type", "Acrofrontofacionasal dysostosis", "Acrogeria Gottron type skin aging",
    "Acromegaloid facial appearance syndrome", "Acromicric dysplasia short stature", "Acrorenal mandibular syndrome", "Adams-Oliver syndrome scalp defects",
    "Adenylosuccinase deficiency autistic features", "Adrenoleukodystrophy neonatal type", "Afibrinogenemia congenital bleeding", "Aicardi-Goutieres syndrome microcephaly",
    "Aicardi syndrome chorioretinal lacunae", "Al Awadi-Raas-Rothschild syndrome", "Al Gazali-Bakalinova syndrome", "Al Gazali-Hirschsprung syndrome",
    "Al Gazali syndrome skeletal dysplasia", "Al Kaissi syndrome vertebral fusion", "Alagille syndrome butterfly vertebrae", "Albers-Schonberg disease marble bones",
    "Albright hereditary osteodystrophy brachydactyly", "Alexander disease megalencephaly", "Alien hand syndrome involuntary grasping", "Allan-Herndon-Dudley syndrome hypotonia",
    "Alopecia contractures dwarfism mental retardation", "Alopecia universalis congenital", "Alpers-Huttenlocher syndrome liver failure", "Alpha-mannosidosis coarse facies",
    "Alport syndrome hereditary nephritis", "Alstrom syndrome cone-rod dystrophy", "Alternating hemiplegia of childhood", "Alveolar capillary dysplasia misalignment",
    "Alveolar echinococcosis liver cysts", "Alveolar soft part sarcoma", "Alzheimer disease early-onset familial", "Amaurosis congenita Leber type",
    "Amelogenesis imperfecta hypoplastic type", "Amniotic band sequence constriction rings", "Ampulla of Vater adenoma", "Amyloid cardiomyopathy transthyretin type",
    "Amyloid neuropathy familial", "Amyloidosis AA secondary", "Amyloidosis AL primary", "Amyloidosis dialysis-related", "Amyloidosis hereditary renal",
    "Amyloidosis localized cutaneous", "Amyloidosis ocular", "Amyloidosis senile systemic", "Amyotrophic lateral sclerosis bulbar onset",
    "Amyotrophic lateral sclerosis familial", "Amyotrophic lateral sclerosis primary lateral sclerosis", "Amyotrophic lateral sclerosis progressive muscular atrophy",
    "Anal canal melanoma", "Anal sphincter achalasia", "Anal verge stenosis congenital", "Anaplastic astrocytoma", "Anaplastic ependymoma",
    "Anaplastic ganglioglioma", "Anaplastic large cell lymphoma ALK-positive", "Anaplastic large cell lymphoma ALK-negative", "Anaplastic medulloblastoma",
    "Anaplastic meningioma", "Anaplastic oligoastrocytoma", "Anaplastic oligodendroglioma", "Anaplastic thyroid cancer", "Ancylostoma duodenale infestation",
    "Andermann syndrome agenesis corpus callosum", "Anderson-Fabry disease angiokeratomas", "Anderson-Tawil syndrome dysmorphic features", "Androgen insensitivity complete",
    "Androgen insensitivity partial", "Anemia Diamond-Blackfan", "Anemia Fanconi", "Anemia hemolytic autoimmune", "Anemia hemolytic microangiopathic",
    "Anemia sideroblastic congenital", "Anemia sideroblastic pyridoxine-responsive", "Anencephaly exencephaly sequence", "Aneurysm abdominal aortic familial",
    "Aneurysm cerebral berry", "Aneurysm coronary artery", "Aneurysm left ventricular", "Aneurysm of sinus of Valsalva", "Aneurysm thoracic aortic",
    "Angelman syndrome happy puppet", "Angioedema acquired C1 inhibitor deficiency", "Angioedema hereditary type I", "Angioedema hereditary type II",
    "Angioedema idiopathic", "Angiofibroma juvenile nasopharyngeal", "Angiokeratoma corporis diffusum", "Angiokeratoma of Fordyce",
    "Angiokeratoma of Mibelli", "Angiomatosis bacillary", "Angiomatosis encephalotrigeminal", "Angiomyolipoma sporadic", "Angiomyolipoma tuberous sclerosis",
    "Angiosarcoma cardiac", "Angiosarcoma hepatic", "Angiosarcoma scalp", "Aniridia congenital", "Aniridia Wilms tumor association",
    "Ankyloblepharon-ectodermal defects-cleft lip/palate", "Ankylosing spondylitis juvenile", "Ankylosing spondylitis rheumatoid factor negative",
    "Ankylosing spondylitis with uveitis", "Ankylosing vertebral hyperostosis Forestier", "Ankylosis of teeth", "Annular pancreas",
    "Anodontia of permanent dentition", "Anomalous coronary artery origin", "Anomalous left coronary from pulmonary artery", "Anomalous pulmonary venous connection partial",
    "Anomalous pulmonary venous connection total", "Anonychia congenita", "Anophthalmia bilateral", "Anophthalmia clinical",
    "Anophthalmia colobomatous", "Anophthalmia monocular", "Anophthalmia primary", "Anophthalmia secondary", "Anophthalmia with limb anomalies",
    "Anorectal agenesis", "Anorectal atresia", "Anorectal malformation rectobulbar", "Anorectal malformation rectoprostatic",
    "Anorectal malformation rectourethral", "Anorectal malformation rectovaginal", "Anorectal malformation rectovesical", "Anorectal stenosis",
    "Anorchism bilateral", "Anorchism monorchism", "Anorchia congenital", "Anosmia congenital", "Anosmia Kallmann syndrome",
    "Anotia bilateral", "Anotia microtia", "Anterior chamber cleavage syndrome", "Anterior horn cell disease", "Anterior segment dysgenesis",
    "Anterocollis cervical dystonia", "Anthracosilicosis", "Anthrax cutaneous", "Anthrax gastrointestinal", "Anthrax inhalational",
    "Antiphospholipid syndrome catastrophic", "Antiphospholipid syndrome primary", "Antiphospholipid syndrome secondary", "Antisynthetase syndrome",
    "Antithrombin III deficiency", "Antley-Bixler syndrome craniosynostosis", "Antral G-cell hyperplasia", "Antral vascular ectasia watermelon stomach",
    "Anus imperforate with fistula", "Aorta coarctation infantile", "Aorta coarctation juxtaductal", "Aorta coarctation postductal",
    "Aorta coarctation preductal", "Aortic arch interruption type A", "Aortic arch interruption type B", "Aortic arch interruption type C",
    "Aortic arch right with mirror-image branching", "Aortic arch right with retroesophageal diverticulum", "Aortic arch right with retroesophageal subclavian",
    "Aortic arch right with vascular ring", "Aortic atresia", "Aortic dissection DeBakey type I", "Aortic dissection DeBakey type II",
    "Aortic dissection DeBakey type III", "Aortic dissection Stanford type A", "Aortic dissection Stanford type B", "Aortic intramural hematoma",
    "Aortic penetrating ulcer", "Aortic pseudoaneurysm", "Aortic regurgitation acute", "Aortic regurgitation chronic", "Aortic regurgitation congenital",
    "Aortic regurgitation rheumatic", "Aortic root dilatation", "Aortic rupture traumatic", "Aortic stenosis calcific", "Aortic stenosis congenital",
    "Aortic stenosis discrete subvalvular", "Aortic stenosis hypertrophic cardiomyopathy", "Aortic stenosis rheumatic", "Aortic stenosis supravalvular",
    "Aortic stenosis valvular", "Aortic transection traumatic", "Aortic valve atresia", "Aortic valve bicuspid", "Aortic valve endocarditis",
    "Aortic valve myxomatous degeneration", "Aortic valve unicuspid", "Aorticopulmonary septal defect", "Aorto-left ventricular tunnel",
    "Aortitis giant cell", "Aortitis syphilitic", "Aortitis Takayasu", "Apert syndrome acrocephalosyndactyly", "Apert syndrome craniosynostosis",
    "Aphalangy hemivertebrae urogenital-intestinal dysgenesis", "Aphalangy syndactyly microcephaly", "Aplasia cutis congenita", "Aplasia cutis-myopia syndrome",
    "Aplasia of lacrimal and salivary glands", "Aplasia of optic nerve", "Aplasia of penis", "Aplasia of uterus", "Aplasia of vagina",
    "Aplastic anemia congenital", "Aplastic anemia idiopathic", "Aplastic anemia post-hepatitis", "Aplastic anemia pure red cell",
    "Apnea central congenital", "Apnea of infancy", "Apnea of prematurity", "Apnea sleep obstructive", "Apocrine adenocarcinoma",
    "Apocrine hidrocystoma", "Appendiceal adenocarcinoma", "Appendiceal carcinoid", "Appendiceal mucocele", "Appendicitis acute",
    "Appendicitis chronic", "Appendicitis gangrenous", "Appendicitis perforated", "Apple peel syndrome intestinal atresia", "Aqueductal stenosis congenital",
    "Aqueductal stenosis late-onset", "Arachnodactyly congenital contractual", "Arachnoid cyst intracranial", "Arachnoid cyst spinal",
    "Arachnoiditis adhesive", "Arachnoiditis ossificans", "Arginase deficiency hyperargininemia", "Argininosuccinate lyase deficiency", "Argininosuccinate synthetase deficiency",
    "Arhinencephaly", "Arhinia bilateral", "Arhinia congenital", "Arnold-Chiari malformation type I", "Arnold-Chiari malformation type II",
    "Arnold-Chiari malformation type III", "Arnold-Chiari malformation type IV", "Aromatase deficiency", "Arrhinia choanal atresia microphthalmia",
    "Arrhythmogenic right ventricular cardiomyopathy", "Arrhythmogenic right ventricular dysplasia", "Arsenic poisoning chronic",
    "Arterial calcification generalized infantile", "Arterial tortuosity syndrome", "Arteriohepatic dysplasia Alagille", "Arteriovenous fistula dural",
    "Arteriovenous fistula pulmonary", "Arteriovenous malformation cerebral", "Arteriovenous malformation spinal", "Arthritis gonococcal",
    "Arthritis mutilans", "Arthritis psoriatic", "Arthritis reactive", "Arthritis rheumatoid juvenile", "Arthritis rheumatoid seropositive",
    "Arthritis septic", "Arthrochalasia multiplex congenita", "Arthrogryposis distal type 1", "Arthrogryposis distal type 2",
    "Arthrogryposis distal type 3", "Arthrogryposis distal type 4", "Arthrogryposis multiplex congenita", "Arthrogryposis oculomotor limitation",
    "Arthrogryposis renal dysfunction cholestasis", "Arthro-ophthalmopathy Stickler", "Arylsulfatase A deficiency", "Arytenoid dislocation",
    "Asbestos-related pleural disease", "Asbestosis", "Ascariasis biliary", "Ascariasis intestinal", "Ascending cholangitis recurrent",
    "Asherman syndrome intrauterine adhesions", "Aspartylglucosaminuria", "Asperger syndrome", "Aspergilloma pulmonary", "Aspergillosis allergic bronchopulmonary",
    "Aspergillosis chronic necrotizing pulmonary", "Aspergillosis invasive", "Asphyxiating thoracic dystrophy Jeune", "Aspiration meconium",
    "Aspiration pneumonia", "Aspiration recurrent", "Aspirin exacerbated respiratory disease", "Aspirin induced asthma", "Aspirin induced urticaria",
    "Aspirin overdose", "Aspirin poisoning", "Asplenia congenital", "Asplenia with cardiovascular anomalies", "Astasia-abasia",
    "Astereognosis", "Asterixis", "Asthenia neurocirculatory", "Asthma allergic", "Asthma bronchial", "Asthma cough variant",
    "Asthma eosinophilic", "Asthma exercise-induced", "Asthma fungal sensitization", "Asthma non-atopic", "Asthma occupational",
    "Asthma steroid-resistant", "Asthma-Chronic Obstructive Pulmonary Disease Overlap", "Astigmatism", "Astrocytoma anaplastic",
    "Astrocytoma cerebellar", "Astrocytoma desmoplastic infantile", "Astrocytoma diffuse", "Astrocytoma gemistocytic", "Astrocytoma optic nerve",
    "Astrocytoma pilocytic", "Astrocytoma pilomyxoid", "Astrocytoma pleomorphic xanthoastrocytoma", "Astrocytoma protoplasmic",
    "Astrocytoma subependymal giant cell", "Asymmetric crying facies", "Ataxia cerebellar", "Ataxia episodic type 1", "Ataxia episodic type 2",
    "Ataxia episodic type 3", "Ataxia episodic type 4", "Ataxia episodic type 5", "Ataxia episodic type 6", "Ataxia episodic type 7",
    "Ataxia episodic type 8", "Ataxia episodic type 9", "Ataxia Friedreich", "Ataxia gluten", "Ataxia hereditary", "Ataxia mitochondrial",
    "Ataxia sensory", "Ataxia spinocerebellar", "Ataxia telangiectasia", "Ataxia with isolated vitamin E deficiency", "Ataxia with oculomotor apraxia type 1",
    "Ataxia with oculomotor apraxia type 2", "Ataxia-telangiectasia-like disorder", "Atelectasis compression", "Atelectasis obstructive",
    "Atelectasis passive", "Atelectasis rounded", "Atherosclerosis accelerated transplant", "Atherosclerosis coronary", "Atherosclerosis peripheral",
    "Atherosclerosis renal artery", "Athymia", "Atonic bladder", "Atonic seizures", "Atopic dermatitis", "Atopic eczema",
    "Atopy", "Atresia of bile ducts extrahepatic", "Atresia of bile ducts intrahepatic", "Atresia of esophagus", "Atresia of jejunum",
    "Atresia of lacrimal punctum", "Atresia of small intestine", "Atresia of urethra", "Atrial appendage aneurysm", "Atrial arrhythmia",
    "Atrial dissociation", "Atrial fibrillation familial", "Atrial fibrillation lone", "Atrial fibrillation nonvalvular", "Atrial fibrillation paroxysmal",
    "Atrial fibrillation persistent", "Atrial fibrillation permanent", "Atrial flutter", "Atrial myxoma", "Atrial septal aneurysm",
    "Atrial septal defect coronary sinus", "Atrial septal defect ostium primum", "Atrial septal defect ostium secundum", "Atrial septal defect sinus venosus",
    "Atrial standstill", "Atrial tachycardia automatic", "Atrial tachycardia chaotic", "Atrial tachycardia focal", "Atrial tachycardia multifocal",
    "Atrial tachycardia reentrant", "Atrioventricular block complete", "Atrioventricular block first-degree", "Atrioventricular block Mobitz type I",
    "Atrioventricular block Mobitz type II", "Atrioventricular block second-degree", "Atrioventricular canal defect complete", "Atrioventricular canal defect partial",
    "Atrioventricular dissociation", "Atrioventricular nodal reentrant tachycardia", "Atrioventricular reentrant tachycardia", "Atrioventricular septal defect",
    "Atrophoderma of Pasini and Pierini", "Atrophoderma vermiculatum", "Atrophy cerebral", "Atrophy multiple system", "Atrophy optic",
    "Atrophy peroneal muscular", "Atrophy spinal muscular", "Atypical femoral fracture", "Atypical hemolytic uremic syndrome", "Atypical mole syndrome",
    "Atypical mycobacterial infection", "Atypical parkinsonism", "Atypical teratoid rhabdoid tumor", "Auditory neuropathy",
    "Auditory processing disorder", "Aural atresia", "Aural polyps", "Auriculo-condylar syndrome", "Auriculo-osteodysplasia",
    "Auriculo-vertebral spectrum", "Autism spectrum disorder", "Autoimmune autonomic ganglionopathy", "Autoimmune cholangitis",
    "Autoimmune colitis", "Autoimmune dermatomyositis", "Autoimmune encephalitis", "Autoimmune enteropathy", "Autoimmune gastritis",
    "Autoimmune hepatitis", "Autoimmune hypophysitis", "Autoimmune inner ear disease", "Autoimmune lymphoproliferative syndrome",
    "Autoimmune myasthenia gravis", "Autoimmune myelofibrosis", "Autoimmune myocarditis", "Autoimmune oophoritis",
    "Autoimmune optic neuritis", "Autoimmune orchitis", "Autoimmune pancreatitis", "Autoimmune polyendocrine syndrome type 1",
    "Autoimmune polyendocrine syndrome type 2", "Autoimmune polyendocrine syndrome type 3", "Autoimmune progesterone dermatitis",
    "Autoimmune retinopathy", "Autoimmune thyroiditis", "Autoimmune urticaria", "Autoimmune uveitis", "Autonomic dysreflexia",
    "Autonomic failure pure", "Autonomic neuropathy diabetic", "Autonomic neuropathy immune-mediated", "Autonomic paraganglioma",
    "Autosomal dominant hypocalcemia", "Autosomal dominant hypophosphatemic rickets", "Autosomal dominant polycystic kidney disease",
    "Autosomal recessive hypophosphatemic rickets", "Autosomal recessive polycystic kidney disease", "Avellis syndrome",
    "Avian influenza H5N1", "Avian influenza H7N9", "Avian influenza H9N2", "Avoidant restrictive food intake disorder",
    "Axenfeld-Rieger syndrome", "Axial spondyloarthritis", "Axillary artery aneurysm", "Axillary nerve palsy", "Axillary vein thrombosis",
    "Axonal neuropathy giant", "Ayerza syndrome", "Azorean disease", "Azoospermia obstructive", "Azoospermia non-obstructive",
    "Babesiosis", "Babinski-Froelich syndrome", "Babinski-Nageotte syndrome", "Bacillary angiomatosis", "Bacillary peliosis",
    "Bacillus cereus food poisoning", "Back pain mechanical", "Back pain non-specific", "Bacterial conjunctivitis", "Bacterial endocarditis",
    "Bacterial meningitis", "Bacterial tracheitis", "Bacterial vaginosis", "Bacteroides fragilis infection", "Bailey-Cushing syndrome",
    "Bainbridge-Ropers syndrome", "Balanitis circinata", "Balanitis xerotica obliterans", "Balanoposthitis", "Baldness male pattern",
    "Baldness universal", "Ballantyne syndrome", "Ballooning mitral valve", "Baltic myoclonus", "Bamforth syndrome",
    "Bamlan syndrome", "Banana spider bite", "Bannayan-Riley-Ruvalcaba syndrome", "Bannayan-Zonana syndrome", "Banti syndrome",
    "Barakat syndrome", "Barber-Say syndrome", "Bardet-Biedl syndrome", "Barlow disease", "Barlow syndrome",
    "Baron-Hay syndrome", "Barotrauma otic", "Barotrauma pulmonary", "Barotrauma sinus", "Barraquer-Simons syndrome",
    "Barr body abnormalities", "Barrett adenocarcinoma", "Barrett esophagus", "Barth syndrome", "Bart-Pumphrey syndrome",
    "Bartter syndrome antenatal", "Bartter syndrome classic", "Bartter syndrome Gitelman-like", "Bartter syndrome neonatal",
    "Bartter syndrome type 1", "Bartter syndrome type 2", "Bartter syndrome type 3", "Bartter syndrome type 4",
    "Bartter syndrome type 5", "Basal cell carcinoma", "Basal cell carcinoma fibroepithelial", "Basal cell carcinoma morpheaform",
    "Basal cell carcinoma nodular", "Basal cell carcinoma superficial", "Basal cell nevus syndrome", "Basal ganglia calcification",
    "Basal ganglia disease", "Basal skull fracture", "Basedow disease", "Basedow paraplegia", "Basilar artery migraine",
    "Basilar artery occlusion", "Basilar invagination", "Basilar meningitis", "Basilar migraine", "Basilar skull fracture",
    "Basilic vein thrombosis", "Bassen-Kornzweig syndrome", "Batten disease", "Battered child syndrome", "Battery ingestion",
    "Bazex syndrome", "Bazex-Dupre-Christol syndrome", "B-cell lymphoma", "B-cell prolymphocytic leukemia", "Beals syndrome",
    "Beals-Hecht syndrome", "Bean syndrome", "Bear claw keratosis", "Bear hug reflex", "Beare-Stevenson syndrome",
    "Becker muscular dystrophy", "Becker myotonia", "Becker nevus", "Beckwith-Wiedemann syndrome", "Bee sting allergy",
    "Beeson syndrome", "Behcet disease", "Behr syndrome", "Bejel", "Bekhterev disease",
    "Bekhterev-Strumpell-Marie disease", "Bell palsy", "Bell phenomenon", "Bence Jones proteinuria", "Bencze syndrome",
    "Benedikt syndrome", "Benign acute childhood myositis", "Benign childhood epilepsy", "Benign congenital hypotonia",
    "Benign essential blepharospasm", "Benign essential tremor", "Benign familial hematuria", "Benign familial neonatal seizures",
    "Benign fasciculation syndrome", "Benign fibrous histiocytoma", "Benign focal amyotrophy", "Benign hereditary chorea",
    "Benign intracranial hypertension", "Benign joint hypermobility syndrome", "Benign lymphoepithelial lesion", "Benign monoclonal gammopathy",
    "Benign multiform erythema", "Benign multiple sclerosis", "Benign myalgic encephalomyelitis", "Benign paroxysmal positional vertigo",
    "Benign paroxysmal torticollis", "Benign prostatic hyperplasia", "Benign recurrent intrahepatic cholestasis", "Benign recurrent vertigo",
    "Benign rolandic epilepsy", "Benign symmetric lipomatosis", "Bennett fracture", "Benson disease", "Bent bone dysplasia",
    "Bent finger", "Bent spine", "Benzene poisoning", "Berardinelli-Seip syndrome", "Beriberi",
    "Bernard-Horner syndrome", "Bernard-Soulier syndrome", "Bernhardt-Roth syndrome", "Berry aneurysm", "Bertolotti syndrome",
    "Berylliosis", "Besnier-Boeck disease", "Best disease", "Best vitelliform macular dystrophy", "Beta-ketothiolase deficiency",
    "Beta-mannosidosis", "Beta-thalassemia", "Betamethasone withdrawal", "Bextra rash", "Biber-Haab-Dimmer dystrophy",
    "Bicuspid aortic valve", "Biemond syndrome", "Biermer anemia", "Bietti crystalline dystrophy", "Bifid nose",
    "Bifid rib", "Bifid thumb", "Bifid tongue", "Bifid uvula", "Bifid xiphoid",
    "Bifascicular block", "Bilateral acoustic neurofibromatosis", "Bilateral frontoparietal polymicrogyria", "Bilateral perisylvian polymicrogyria",
    "Bilateral renal agenesis", "Bile acid malabsorption", "Bile duct adenoma", "Bile duct atresia", "Bile duct cancer",
    "Bile duct cyst", "Bile duct hamartoma", "Bile duct papillomatosis", "Bile duct stenosis", "Bile duct stricture",
    "Bile gastritis", "Bile peritonitis", "Bile reflux", "Bilharzia", "Biliary adenoma",
    "Biliary atresia", "Biliary cirrhosis", "Biliary cirrhosis primary", "Biliary cirrhosis secondary", "Biliary colic",
    "Biliary cyst", "Biliary dyskinesia", "Biliary hamartoma", "Biliary papillomatosis", "Biliary sludge",
    "Biliary stent occlusion", "Biliary stricture", "Bilious vomiting syndrome", "Bilirubin encephalopathy", "Bilirubin metabolic disorder",
    "Bilirubin overload", "Biliverdin reductase deficiency", "Bing-Horton syndrome", "Bing-Neel syndrome", "Binswanger disease",
    "Biotin deficiency", "Biotin holocarboxylase synthetase deficiency", "Biotinidase deficiency", "Biparietal thinning",
    "Bipolar disorder", "Bipolar I disorder", "Bipolar II disorder", "Bipolar spectrum disorder", "Bipositive acute leukemia",
    "Bird breeder lung", "Bird fancier lung", "Bird-headed dwarfism", "Birdshot chorioretinopathy", "Birk-Landau syndrome",
    "Birt-Hogg-Dube syndrome", "Birth asphyxia", "Birth fracture", "Birth trauma", "Bisphosphonate osteonecrosis",
    "Bite cell anemia", "Bite injury", "Bitemporal hemianopia", "Bithalamic glioma", "Bithalamic lesions",
    "Bitoric spots", "Bitten tongue", "Biventricular failure", "Biventricular hypertrophy", "Biventricular pacing",
    "Bjornstad syndrome", "Black eye", "Black fungus", "Black hairy tongue", "Black heel",
    "Black lung disease", "Black measles", "Black nail", "Black piedra", "Black vomit",
    "Black widow spider bite", "Blackfan-Diamond anemia", "Blackfoot disease", "Blackwater fever", "Bladder cancer",
    "Bladder diverticulum", "Bladder exstrophy", "Bladder neck contracture", "Bladder neck dyssynergia", "Bladder outflow obstruction",
    "Bladder pain syndrome", "Bladder rupture", "Bladder stones", "Bladder trabeculation", "Bladder tumor",
    "Bladder wall thickening", "Bladder-sphincter dyssynergia", "Bladder-ureter reflux", "Bladock-Thomas-Taussig shunt", "Bladock-Taussig shunt",
    "Blain disease", "Blast injury", "Blastocystis hominis infection", "Blastoma", "Blastomyces dermatitidis",
    "Blastomycosis", "Blastomycosis African", "Blastomycosis North American", "Blastomycosis South American", "Bleb lung",
    "Bleeding diathesis", "Bleeding disorder", "Bleeding esophageal varices", "Bleeding gastric varices", "Bleeding hemorrhoids",
    "Bleeding telangiectasia", "Bleeding time prolonged", "Blepharitis", "Blepharochalasis", "Blepharoconjunctivitis",
    "Blepharophimosis", "Blepharophimosis-epicanthus inversus-ptosis", "Blepharoptosis", "Blepharospasm", "Blessig cyst",
    "Blighted ovum", "Blind loop syndrome", "Blind spot enlargement", "Blindness cortical", "Blindness night",
    "Blindness transient", "Blister beetle dermatitis", "Blister distal", "Blister sucking", "Blistering distal dactylitis",
    "Bloch-Sulzberger syndrome", "Bloch-Sulzberger incontinentia pigmenti", "Block vertebra", "Blocked ear", "Blocked nose",
    "Blood aspiration", "Blood blister", "Blood-brain barrier disruption", "Blood-cerebrospinal fluid barrier disruption", "Blood-nerve barrier disruption",
    "Blood-retinal barrier disruption", "Blood-testis barrier disruption", "Blood-thymus barrier disruption", "Bloom syndrome", "Blount disease",
    "Blue baby", "Blue bloater", "Blue diaper syndrome", "Blue dot cataract", "Blue finger",
    "Blue fungus", "Blue light exposure", "Blue mole", "Blue nail", "Blue nevus",
    "Blue rubber bleb nevus syndrome", "Blue sclera", "Blue toe syndrome", "Blunt cardiac injury", "Blunt trauma",
    "B-lymphocyte deficiency", "Bochdalek hernia", "Bochdalek foramen", "Bockhart impetigo", "Bodily distress disorder",
    "Body dysmorphic disorder", "Body lice", "Body packer syndrome", "Body stalk anomaly", "Body stuffing",
    "Boerhaave syndrome", "Bogorad syndrome", "Bohring-Opitz syndrome", "Bold mental", "Bolis syndrome",
    "Bombay phenotype", "Bombay blood group", "Bone abscess", "Bone age advanced", "Bone age delayed",
    "Bone bruise", "Bone cyst", "Bone cyst aneurysmal", "Bone cyst simple", "Bone density decreased",
    "Bone dysplasia", "Bone erosion", "Bone fracture", "Bone infarct", "Bone island",
    "Bone marrow aplasia", "Bone marrow failure", "Bone marrow fibrosis", "Bone marrow necrosis", "Bone marrow suppression",
    "Bone marrow transplant rejection", "Bone metastasis", "Bone mineral density low", "Bone pain", "Bone sarcoma",
    "Bone sclerosis", "Bone spur", "Bone tumor", "Bonnevie-Ullrich syndrome", "Bonnier syndrome",
    "Book syndrome", "BOOP bronchiolitis obliterans organizing pneumonia", "Boomerang dysplasia", "Boomerang sign", "Boot-shaped heart",
    "Borjeson-Forssman-Lehmann syndrome", "Borna disease", "Bornholm disease", "Borrelia burgdorferi", "Borrelia miyamotoi",
    "Borrelia recurrentis", "Borreliosis", "Borreliosis Lyme", "Borreliosis recurrent", "Borreliosis relapsing",
    "Bose syndrome", "Boston exanthem", "Botfly infestation", "Bothriocephalus latus", "Botryoid sarcoma",
    "Botryomycosis", "Bottle feeding problem", "Bottle nose", "Bottle tooth decay", "Bottleneck deformity",
    "Botulinum toxin poisoning", "Botulism", "Botulism foodborne", "Botulism infant", "Botulism wound",
    "Bouchard nodes", "Bouchard disease", "Bourneville disease", "Bourneville-Pringle syndrome", "Boutonneuse fever",
    "Boutonniere deformity", "Bouveret syndrome", "Bouveret-Hoffmann syndrome", "Bovine spongiform encephalopathy", "Bow hunter syndrome",
    "Bowen disease", "Bowen carcinoma", "Bowen syndrome", "Bowenoid papulosis", "Bowing of legs",
    "Bowleg", "Bowler finger", "Bowman membrane", "Bowman layer dystrophy", "Bowtie sign",
    "Boxer fracture", "Boxer knuckle", "Boxing encephalopathy", "Brachial amyotrophic diplegia", "Brachial artery occlusion",
    "Brachial artery thrombosis", "Brachial neuritis", "Brachial neuritis hereditary", "Brachial neuritis idiopathic", "Brachial neuritis neuralgic amyotrophy",
    "Brachial plexus birth palsy", "Brachial plexus injury", "Brachial plexus neuropathy", "Brachial plexus palsy", "Brachial plexus stretch",
    "Brachial plexus tumor", "Brachial radiculitis", "Brachialgia", "Brachiocephalic artery compression", "Brachiocephalic vein thrombosis",
    "Brachiocephalic trunk aneurysm", "Brachio-cubito-pronator syndrome", "Brachio-oto-renal syndrome", "Brachio-radio-ulnar synostosis", "Brachium conjunctivum",
    "Brachmann-de Lange syndrome", "Brachycardia", "Brachycephaly", "Brachydactyly", "Brachydactyly-hypertension syndrome",
    "Brachydactyly-mental retardation syndrome", "Brachydactyly-nystagmus-cerebellar ataxia", "Brachydactyly-type A1", "Brachydactyly-type A2",
    "Brachydactyly-type A3", "Brachydactyly-type A4", "Brachydactyly-type A5", "Brachydactyly-type A6", "Brachydactyly-type A7",
    "Brachydactyly-type B", "Brachydactyly-type C", "Brachydactyly-type D", "Brachydactyly-type E", "Brachyesophagus",
    "Brachymetacarpia", "Brachymetatarsia", "Brachymetapody", "Brachymorphism", "Brachyonychia",
    "Brachyphalangia", "Brachytelephalangy", "Brachytherapy complication", "Brachytherapy overdose", "Brachytherapy underdose",
    "Brachyuria", "Bradycardia", "Bradycardia-tachycardia syndrome", "Bradykinesia", "Bradypnea",
    "Bradypsychia", "Bradyteleocinesia", "Brain abscess", "Brain atrophy", "Brain calcification",
    "Brain cavernous malformation", "Brain compression", "Brain confusion", "Brain contusion", "Brain cyst",
    "Brain death", "Brain edema", "Brain embolism", "Brain encephalopathy", "Brain fungus",
    "Brain glioma", "Brain herniation", "Brain hemorrhage", "Brain hypoxia", "Brain infarction",
    "Brain infection", "Brain inflammation", "Brain injury", "Brain ischemia", "Brain laceration",
    "Brain lymphoma", "Brain malformation", "Brain metastasis", "Brain microbleeds", "Brain necrosis",
    "Brain neoplasm", "Brain purpura", "Brain radiation necrosis", "Brain sag", "Brain sarcoidosis",
    "Brain shrinkage", "Brain stem compression", "Brain stem death", "Brain stem encephalitis", "Brain stem glioma",
    "Brain stem hemorrhage", "Brain stem infarction", "Brain stem ischemia", "Brain stem stroke", "Brain stem tumor",
    "Brain swelling", "Brain tuberculoma", "Brain tumor", "Brain tumor metastatic", "Brain tumor primary",
    "Brain vascular malformation", "Brain ventricular collapse", "Brain ventricular dilatation", "Brain water content", "Brain-eating amoeba",
    "Branch retinal artery occlusion", "Branch retinal vein occlusion", "Branchial arch syndrome", "Branchial cleft cyst", "Branchial cleft fistula",
    "Branchial cleft sinus", "Branchial cyst", "Branchial fistula", "Branchial sinus", "Branchio-oculo-facial syndrome",
    "Branchio-oto-renal syndrome", "Brandt syndrome", "Branny desquamation", "Brassy cough", "Braun-Falco syndrome",
    "Braxton Hicks contractions", "Brazilian blastomycosis", "Brazilian hemorrhagic fever", "Brazilian purpuric fever", "Brazilian spotted fever",
    "BRCA1 mutation", "BRCA2 mutation", "BRCA3 mutation", "BRCA-related breast cancer", "BRCA-related ovarian cancer",
    "BRCA-related pancreatic cancer", "BRCA-related prostate cancer", "Breakbone fever", "Breakthrough bleeding", "Breakthrough pain",
    "Breast abscess", "Breast adenoma", "Breast atrophy", "Breast calcifications", "Breast cancer HER2 positive",
    "Breast cancer HER2 negative", "Breast cancer hormone receptor positive", "Breast cancer inflammatory", "Breast cancer lobular", "Breast cancer male",
    "Breast cancer metastatic", "Breast cancer triple negative", "Breast cyst", "Breast density increased", "Breast discharge",
    "Breast disease", "Breast duct ectasia", "Breast dysplasia", "Breast eczema", "Breast edema",
    "Breast engorgement", "Breast fibroadenoma", "Breast fibrocystic disease", "Breast fistula", "Breast hamartoma",
    "Breast hypertrophy", "Breast hypoplasia", "Breast inflammation", "Breast lipoma", "Breast lymphoma",
    "Breast milk jaundice", "Breast necrosis", "Breast nodule", "Breast pain", "Breast papilloma",
    "Breast phyllodes tumor", "Breast sarcoma", "Breast skin dimpling", "Breast swelling", "Breast tenderness",
    "Breast tissue involution", "Breast tumor", "Breast ulcer", "Breast-feeding difficulty", "Breast-feeding jaundice",
    "Breath holding spell", "Breath test abnormal", "Breath test Helicobacter pylori", "Breath test lactose intolerance", "Breath-holding",
    "Breathing sleep-related disorder", "Breathing-related sleep disorder", "Breathlessness", "Breech presentation", "Breisky disease",
    "Brenner tumor", "Bretonneau angina", "Breus mole", "Brevicollis", "Brevilabia",
    "Brevity of life", "Brick dust urine", "Bricker bladder", "Bricker conduit", "Bricker ileal conduit",
    "Bricker loop", "Bridged purkinje fibers", "Bridged sclera", "Bridging fibrosis", "Bridging necrosis",
    "Bridging osteophyte", "Briggs anemia", "Bright disease", "Brill disease", "Brill-Symmers disease",
    "Brill-Zinsser disease", "Brimstone liver", "Brink syndrome", "Brinkerhoff hyperplasia", "Brinkerhoff lesion",
    "Brinton disease", "Brinton stomach", "Brisket disease", "Bristle worm sting", "Bristow syndrome",
    "British encephalitis", "British type amyloidosis", "Brittle bone disease", "Brittle cornea syndrome", "Brittle diabetes",
    "Brittle hair", "Brittle nails", "Brittle teeth", "Broad beta disease", "Broad thumb",
    "Broad thumb-hallux syndrome", "Broad thumbs syndrome", "Broad toes", "Broca aphasia", "Broca area",
    "Broca syndrome", "Brock syndrome", "Brockenbrough sign", "Brodie abscess", "Brodie disease",
    "Brodie joint", "Brodie knee", "Brodie tumor", "Brodmann area", "Broken heart syndrome",
    "Broken nose", "Broken tooth", "Bromhidrosis", "Bromide acne", "Bromide intoxication",
    "Bromidrosiphobia", "Bromism", "Bromoderma", "Bronchial adenoma", "Bronchial adenoma carcinoid",
    "Bronchial atresia", "Bronchial carcinoid", "Bronchial cyst", "Bronchial gland carcinoma", "Bronchial hyperreactivity",
    "Bronchial hyperresponsiveness", "Bronchial obstruction", "Bronchial stenosis", "Bronchial thermoplasty complication", "Bronchial wall thickening",
    "Bronchiectasis", "Bronchiectasis cylindrical", "Bronchiectasis cystic", "Bronchiectasis traction", "Bronchiectasis varicose",
    "Bronchiolar carcinoma", "Bronchiolectasis", "Bronchiolitis", "Bronchiolitis obliterans", "Bronchiolitis obliterans organizing pneumonia",
    "Bronchiolitis respiratory syncytial virus", "Bronchioloalveolar carcinoma", "Bronchioloalveolar carcinoma mucinous", "Bronchioloalveolar carcinoma non-mucinous",
    "Bronchioloalveolar carcinoma signet ring", "Bronchitis", "Bronchitis acute", "Bronchitis asthmatic", "Bronchitis chronic",
    "Bronchitis eosinophilic", "Bronchitis plastic", "Bronchitis pseudomembranous", "Bronchitis viral", "Bronchitis-associated dyspnea",
    "Bronchoalveolar carcinoma", "Bronchoalveolar lavage abnormal", "Bronchobiliary fistula", "Bronchocentric granulomatosis", "Bronchoconstriction",
    "Bronchodilator response", "Bronchoesophageal fistula", "Bronchogenic carcinoma", "Bronchogenic cyst", "Broncholithiasis",
    "Bronchomalacia", "Bronchopleural fistula", "Bronchopleural fistula post-lobectomy", "Bronchopneumonia", "Bronchopneumonia bacterial",
    "Bronchopneumonia viral", "Bronchoprovocation test positive", "Bronchorrhea", "Bronchoscopy abnormal", "Bronchospasm",
    "Bronchospasm exercise-induced", "Bronchospastic disease", "Bronchostenosis", "Bronchotracheal collapse", "Bronchovascular markings increased",
    "Bronchus rupture", "Bronchus tumor", "Bronze baby syndrome", "Bronze diabetes", "Bronze skin",
    "Brooke tumor", "Brooke-Spiegler syndrome", "Brown adipose tissue", "Brown atrophy", "Brown bowel syndrome",
    "Brown edema", "Brown fat", "Brown fat tumor", "Brown hypertrophic scar", "Brown induration",
    "Brown lung", "Brown pigmentation", "Brown recluse spider bite", "Brown ring", "Brown-Symmers disease",
    "Brown-Vialetto-Van Laere syndrome", "Brown tumor", "Brown atrophy of liver", "Brown atrophy of myocardium", "Brown atrophy of spleen",
    "Brown atrophy of thymus", "Brown bowel syndrome", "Brown degeneration", "Brown edema of lung", "Brown induration of lung",
    "Brucella abortus", "Brucella canis", "Brucella melitensis", "Brucella suis", "Brucellar spondylitis",
    "Brucellar spondylodiscitis", "Brucellosis", "Brucellosis acute", "Brucellosis chronic", "Brucellosis subacute",
    "Bruise", "Bruise easily", "Bruit", "Bruit abdominal", "Bruit carotid",
    "Bruit cranial", "Bruit femoral", "Bruit thyroid", "Brunner gland adenoma", "Brunner gland hyperplasia",
    "Brunner syndrome", "Brushfield spots", "Brushfield-Wyatt syndrome", "Bruton agammaglobulinemia", "Bruton disease",
    "Bruton tyrosine kinase deficiency", "Bruxism", "Bruxism awake", "Bruxism sleep", "Bryant sign",
    "Bubas Braziliana", "Bubo", "Bubo chancroidal", "Bubo climatic", "Bubo indolent",
    "Bubo primary", "Bubo secondary", "Bubo syphilitic", "Bubo tropical", "Bubonic plague",
    "Bubonic plague pneumonic", "Bubonic plague septicemic", "Bucardia", "Buccal carcinoma", "Buccal cellulitis",
    "Buccal fat pad", "Buccal hemangioma", "Buccal mucosa", "Buccal mucosal cancer", "Buccal mucosal lesion",
    "Buccal neoplasm", "Buccal pigmentation", "Buccal squamous cell carcinoma", "Buccal tumor", "Buccal ulcer",
    "Buccal vestibule", "Buccinator muscle", "Buccinator reflex", "Bucco-lingual syndrome", "Bucco-pharyngeal membrane",
    "Budd-Chiari syndrome", "Budd-Chiari syndrome acute", "Budd-Chiari syndrome chronic", "Budd-Chiari syndrome fulminant", "Budd-Chiari syndrome subacute",
    "Buddy sign", "Budge center", "Budge reflex", "Budge sphincter", "Budge wallerian degeneration",
    "Buerger disease", "Buerger exercise", "Buerger symptom", "Buerger test", "Buerger-Allen exercise",
    "Buffalo hump", "Buffalo hump obesity", "Buffalo neck", "Buffalo type", "Buffalo wing",
    "Buffalo worm", "Buffer base", "Buffer base abnormality", "Buffer capacity", "Buffer system",
    "Buffy coat", "Buffy coat abnormality", "Buffy coat smear", "Buhot sign", "Bulbar conjunctiva",
    "Bulbar conjunctival edema", "Bulbar conjunctival hemorrhage", "Bulbar conjunctival injection", "Bulbar conjunctival pallor", "Bulbar myelitis",
    "Bulbar palsy", "Bulbar paralysis", "Bulbar poliomyelitis", "Bulbar syndrome", "Bulbocavernosus reflex",
    "Bulbocavernosus reflex absent", "Bulbocavernosus reflex hyperactive", "Bulbocavernosus reflex hypoactive", "Bulbospinal muscular atrophy", "Bulbospinal neuronopathy",
    "Bulbospinal poliomyelitis", "Bulbous aortic root", "Bulbous bone", "Bulbous deformity", "Bulbous nose",
    "Bulging fontanelle", "Bulging tympanic membrane", "Bulimia", "Bulimia nervosa", "Bulimia nervosa non-purging type",
    "Bulimia nervosa purging type", "Bulimia subthreshold", "Bulking agent adverse effect", "Bulla", "Bulla emphysematous",
    "Bulla lung", "Bulla of lung", "Bulla pulmonary", "Bulla subpleural", "Bullae",
    "Bullae giant", "Bullae subpleural", "Bullar conjunctiva", "Bullar keratopathy", "Bullar paralysis",
    "Bullen sign", "Bullis fever", "Bullosa", "Bullosa diabeticorum", "Bullosa hereditaria",
    "Bullosa ichthyosiformis", "Bullosa mechanica", "Bullosa striata", "Bullosa toxica", "Bullosa traumatica",
    "Bullosis diabeticorum", "Bullous dermatosis", "Bullous dermatosis of childhood", "Bullous dermatosis of pregnancy", "Bullous dermatosis subcorneal",
    "Bullous disease", "Bullous disease chronic", "Bullous disease of lung", "Bullous disease of pregnancy", "Bullous drug eruption",
    "Bullous emphysema", "Bullous erythema multiforme", "Bullous ichthyosis", "Bullous impetigo", "Bullous keratopathy",
    "Bullous lichen planus", "Bullous lupus erythematosus", "Bullous mastocytosis", "Bullous morphea", "Bullous myringitis",
    "Bullous pemphigoid", "Bullous pemphigoid gestational", "Bullous pemphigoid localized", "Bullous pemphigoid nodularis", "Bullous pemphigus",
    "Bullous pemphigus vegetans", "Bullous pemphigus vulgaris", "Bullous systemic lupus erythematosus", "Bullous transient acantholytic dermatosis", "Bullous urticaria",
    "Bullous vasculitis", "Bumke pupil", "Bunamidine poisoning", "Bundle branch", "Bundle branch block",
    "Bundle branch block bifascicular", "Bundle branch block bilateral", "Bundle branch block complete", "Bundle branch block incomplete", "Bundle branch block left",
    "Bundle branch block right", "Bundle branch block trifascicular", "Bundle branch reentry", "Bundle branch reentry tachycardia", "Bundle branch ventricular tachycardia",
    "Bundle of His", "Bundle of His block", "Bundle of His electrogram", "Bundle of Kent", "Bundle of Stanius",
    "Bunion", "Bunion tailor", "Bunionectomy complication", "Bunionette", "Bunions",
    "Bunina bodies", "Bunina body", "Bunyamwera virus", "Bunyavirus", "Bunyavirus encephalitis",
    "Buphthalmos", "Buphthalmos congenital", "Buphthalmos infantile", "Buprenorphine withdrawal", "Buprenorphine-induced sedation",
    "Buprenorphine-related respiratory depression", "Burch procedure complication", "Burch resection complication", "Burch technique failure", "Burdach fasciculus",
    "Burdach nucleus", "Burdach tract", "Buret syndrome", "Burger disease", "Burger-Grutz syndrome",
    "Burkholderia cepacia", "Burkholderia cepacia infection", "Burkholderia mallei", "Burkholderia pseudomallei", "Burkholderia pseudomallei infection",
    "Burkitt lymphoma", "Burkitt lymphoma endemic", "Burkitt lymphoma immunodeficiency-associated", "Burkitt lymphoma sporadic", "Burkitt-like lymphoma",
    "Burkitt's leukemia", "Burn", "Burn chemical", "Burn contracture", "Burn depth",
    "Burn electrical", "Burn eschar", "Burn first degree", "Burn fourth degree", "Burn inhalation",
    "Burn radiation", "Burn second degree", "Burn sepsis", "Burn shock", "Burn stress",
    "Burn third degree", "Burn wound", "Burn wound infection", "Burnett syndrome", "Burnett milk-alkali syndrome",
    "Burnout", "Burnout syndrome", "Burning feet", "Burning feet syndrome", "Burning hand",
    "Burning mouth syndrome", "Burning pain", "Burning scalp syndrome", "Burning tongue", "Burning urination",
    "Burns encephalopathy", "Burns eye", "Burns face", "Burns hand", "Burns inhalation injury",
    "Burns mouth", "Burns of cornea", "Burns of esophagus", "Burns of genitalia", "Burns of larynx",
    "Burns of oral cavity", "Burns of pharynx", "Burns of respiratory tract", "Burns of trachea", "Burns of vagina",
    "Burns sepsis", "Burns shock", "Burn-specific anxiety", "Burn-specific depression", "Burn-specific stress disorder",
    "Burnt-out diabetes", "Burnt-out multiple sclerosis", "Burr cells", "Burr hole", "Burr hole complication",
    "Burr hole hematoma", "Burr hole infection", "Burrowing", "Burrowing flea", "Burrowing mite",
    "Bursa", "Bursa abscess", "Bursa calcific", "Bursa infection", "Bursa inflammation",
    "Bursa olecranon", "Bursa prepatellar", "Bursa retrocalcaneal", "Bursa septic", "Bursa subacromial",
    "Bursa subdeltoid", "Bursa trochanteric", "Bursal cyst", "Bursal effusion", "Bursal thickening",
    "Bursitis", "Bursitis Achilles", "Bursitis adhesive", "Bursitis anserine", "Bursitis calcific",
    "Bursitis infrapatellar", "Bursitis ischial", "Bursitis olecranon", "Bursitis prepatellar", "Bursitis retrocalcaneal",
    "Bursitis septic", "Bursitis subacromial", "Bursitis subdeltoid", "Bursitis trochanteric", "Burst abdomen",
    "Burst fracture", "Burst fracture cervical", "Burst fracture lumbar", "Burst fracture sacral", "Burst fracture thoracic",
    "Burst lung", "Burst suppression", "Burst suppression EEG", "Burst trauma", "Burst wound",
    "Buruli ulcer", "Buschke disease", "Buschke scleredema", "Buschke-Ollendorff syndrome", "Buschke-Loewenstein tumor",
    "Buserelin adverse effect", "Buserelin ovarian hyperstimulation", "Busulfan lung", "Busulfan toxicity", "Busulfan-induced pulmonary fibrosis",
    "Butane inhalation", "Butane poisoning", "Butanol poisoning", "Butcher wart", "Butcher's pemphigus",
    "Butler-Albright syndrome", "Butterfly fracture", "Butterfly glioma", "Butterfly needle injury", "Butterfly pattern",
    "Butterfly rash", "Butterfly vertebra", "Butterfly-shaped lesion", "Button battery ingestion", "Button sequestrum",
    "Buttonholing", "Buttock abscess", "Buttock cellulitis", "Buttock claudication", "Buttock pain",
    "Butyrophenone adverse effect", "Butyrophenone-induced dystonia", "Butyrophenone-induced parkinsonism", "Butyrophenone-induced tardive dyskinesia", "Byler disease",
    "Byler syndrome", "Bypass graft aneurysm", "Bypass graft failure", "Bypass graft infection", "Bypass graft occlusion",
    "Bypass graft stenosis", "Bypass graft thrombosis", "Bypass tract", "Bypass tract accessory pathway", "Bypass tract arrhythmia",
    "Byssinosis", "Byssinosis acute", "Byssinosis chronic", "Byssinosis grade 1", "Byssinosis grade 2",
    "Byssinosis grade 3", "Byssinosis late stage", "Byssinosis with respiratory impairment", "Byssinosis without respiratory impairment", "Bystander effect",
    "Bystander injury", "Bystander reaction", "Bystander T-cell activation", "Bystolic adverse effect", "Bystolic overdose",
    "Bystolic withdrawal", "C syndrome", "C1 esterase deficiency", "C1 esterase inhibitor deficiency", "C1 inhibitor deficiency",
    "C1 inhibitor deficiency acquired", "C1 inhibitor deficiency hereditary", "C1 inhibitor deficiency type 1", "C1 inhibitor deficiency type 2", "C1q deficiency",
    "C1r deficiency", "C1s deficiency", "C2 deficiency", "C3 deficiency", "C3 glomerulopathy",
    "C3 glomerulonephritis", "C3 nephritic factor", "C4 deficiency", "C4 nephritic factor", "C5 deficiency",
    "C5 nephritic factor", "C6 deficiency", "C7 deficiency", "C8 deficiency", "C9 deficiency",
    "CA 125 elevation", "CA 15-3 elevation", "CA 19-9 elevation", "CA 27-29 elevation", "CA 72-4 elevation",
    "CA 125 tumor marker elevation", "Cacchi-Ricci disease", "Cachectic", "Cachectic appearance", "Cachectic edema",
    "Cachectic heart", "Cachectic state", "Cachexia", "Cachexia cancer", "Cachexia cardiac",
    "Cachexia diabetic", "Cachexia hypophyseal", "Cachexia hypopituitary", "Cachexia malaria", "Cachexia malarial",
    "Cachexia mercurial", "Cachexia rheumatoid", "Cachexia senile", "Cachexia strumipriva", "Cachexia thyroid",
    "Cachexia thyrotoxic", "Cachexia tuberculous", "Cacosmia", "Cacogeusia", "Cacophony",
    "Cacoplastic", "Cacosmia", "Cacostomia", "CADASIL", "CADASIL syndrome",
    "CADASIL with subcortical infarcts", "CADASIL with vascular dementia", "Cadmium nephropathy", "Cadmium poisoning", "Cadmium toxicity",
    "Cafe au lait macules", "Cafe au lait spots", "Cafe coronary", "Cafe-au-lait spots",
    "Caffey disease", "Caffey syndrome", "Caffey-Silverman syndrome", "Caffey disease infantile cortical hyperostosis", "Cage dislocation",
    "Cage fracture", "Cage infection", "Cage loosening", "Cage migration", "Cage subsidence",
    "Cage thoracoplasty complication", "Cairns tumor", "Cajal body", "Cajal cell", "Cajal cell hyperplasia",
    "Cajal cell tumor", "Cajal-Retzius cell", "Cake kidney", "Cake kidney fused", "Cake kidney lobulated",
    "Cake kidney pelvic", "Calabar swelling", "Calabar swelling loiasis", "Calabar swelling recurrent", "Calabar swelling transient",
    "Calcaneal apophysitis", "Calcaneal bone cyst", "Calcaneal bursitis", "Calcaneal cyst", "Calcaneal edema",
    "Calcaneal epiphysitis", "Calcaneal exostosis", "Calcaneal fracture", "Calcaneal insufficiency fracture", "Calcaneal osteomyelitis",
    "Calcaneal osteophyte", "Calcaneal pain", "Calcaneal peritendinitis", "Calcaneal spicule", "Calcaneal spur",
    "Calcaneal stress fracture", "Calcaneal tendon", "Calcaneal tendonitis", "Calcaneal tuberosity", "Calcaneal tumor",
    "Calcaneo-cuboid joint", "Calcaneo-cuboid joint arthritis", "Calcaneo-cuboid joint dysfunction", "Calcaneo-cuboid joint pain", "Calcaneo-navicular coalition",
    "Calcaneo-navicular ligament", "Calcaneo-navicular ligament injury", "Calcaneo-navicular tarsal coalition", "Calcar avis", "Calcar femorale",
    "Calcarine artery", "Calcarine cortex", "Calcarine fissure", "Calcarine sulcus", "Calcarine visual cortex",
    "Calcinosis", "Calcinosis circumscripta", "Calcinosis cutis", "Calcinosis dystrophic", "Calcinosis iatrogenic",
    "Calcinosis idiopathic", "Calcinosis metastatic", "Calcinosis tumoral", "Calcinosis universalis", "Calcinosis-Raynaud phenomenon-sclerodactyly-telangiectasia",
    "Calciphylaxis", "Calciphylaxis calcific uremic arteriolopathy", "Calciphylaxis cutaneous", "Calciphylaxis hyperparathyroidism", "Calciphylaxis renal",
    "Calcitonin deficiency", "Calcitonin excess", "Calcitonin stimulation test", "Calcitonin-induced hypocalcemia", "Calcitonin-related adverse effect",
    "Calcium bilirubinate stones", "Calcium carbonate stones", "Calcium channel blocker overdose", "Calcium channel blocker toxicity", "Calcium channel blocker withdrawal",
    "Calcium deficiency", "Calcium deposits", "Calcium gout", "Calcium hydroxyapatite deposition", "Calcium hydroxyapatite deposition disease",
    "Calcium metabolism disorder", "Calcium oxalate crystals", "Calcium oxalate nephropathy", "Calcium oxalate stones", "Calcium phosphate crystals",
    "Calcium phosphate stones", "Calcium pyrophosphate crystals", "Calcium pyrophosphate dihydrate deposition", "Calcium pyrophosphate deposition disease", "Calcium sensor receptor mutation",
    "Calcium-sensing receptor mutation", "Calcium-sensing receptor-related disorders", "Calcium-sensing receptor-related hypercalcemia", "Calcium-sensing receptor-related hypocalcemia", "Calculi",
    "Calculi biliary", "Calculi bladder", "Calculi gallbladder", "Calculi kidney", "Calculi pancreatic",
    "Calculi prostatic", "Calculi renal", "Calculi salivary", "Calculi staghorn", "Calculi ureteral",
    "Calculi urethral", "Calculi urinary", "Calculi vesical", "Calculous cholecystitis", "Calculous pyelonephritis",
    "Calf abscess", "Calf atrophy", "Calf cellulitis", "Calf cramp", "Calf cyst",
    "Calf enlargement", "Calf hematoma", "Calf hypertrophy", "Calf muscle", "Calf muscle atrophy",
    "Calf muscle cramp", "Calf muscle rupture", "Calf muscle strain", "Calf pain", "Calf pseudohypertrophy",
    "Calf swelling", "Calf tenderness", "Calf ulcer", "Calf vein", "Calf vein thrombosis",
    "Caliber-persistent artery", "Caliber-persistent labial artery", "Calicivirus infection", "Calicivirus gastroenteritis", "California encephalitis",
    "California encephalitis virus", "California serogroup virus", "Call-Fleming syndrome", "Call-Fleming syndrome reversible cerebral vasoconstriction", "Callositas",
    "Callosities", "Callosity", "Callosal agenesis", "Callosal apraxia", "Callosal disconnection",
    "Callosal dysgenesis", "Callosal glioma", "Callosal hemorrhage", "Callosal infarction", "Callosal lipoma",
    "Callosal syndrome", "Callosal tumor", "Callositas", "Callosity", "Callosity plantar",
    "Callosity vocal", "Callus", "Callus bone", "Callus bridging", "Callus cartilage",
    "Callus consolidation", "Callus exuberant", "Callus formation", "Callus fracture", "Callus hard",
    "Callus hypertrophic", "Callus infected", "Callus non-union", "Callus soft", "Callus tissue",
    "Caloric test abnormal", "Caloric test cold", "Caloric test warm", "Caloric test-induced nystagmus", "Caloric vestibular testing",
    "Calorigenesis", "Calorigenic effect", "Calorigenic hormone", "Calorigenic response", "Calorigenic thermogenesis",
    "Calpainopathy", "Calpainopathy limb-girdle muscular dystrophy", "Calpainopathy LGMD2A", "Calpain-related muscular dystrophy", "Calpain-related myopathy",
    "Calpastatin deficiency", "Calpastatin-related disorder", "Calreticulin deficiency", "Calreticulin mutation", "Calreticulin-related disorder",
    "Calretinin deficiency", "Calretinin staining", "Calretinin-positive tumor", "Calretinin-related disorder", "Calvarial atrophy",
    "Calvarial defect", "Calvarial erosion", "Calvarial fracture", "Calvarial hemangioma", "Calvarial hyperostosis",
    "Calvarial lymphoma", "Calvarial metastasis", "Calvarial osteoma", "Calvarial osteomyelitis", "Calvarial sarcoma",
    "Calvarial thickening", "Calvarial tumor", "Calvarial vault", "Calvarial vault fracture", "Calvarium",
    "Calvarium bifid", "Calvium", "Calymmatobacterium granulomatis", "Calymmatobacterium granulomatis infection", "Calyx",
    "Calyx cyst", "Calyx dilatation", "Calyx diverticulum", "Calyx fornix", "Calyx rupture",
    "Calyx stone", "Calyx tumor", "CAM facies", "CAM facies cardiofaciocutaneous syndrome", "CAM facies Costello syndrome",
    "CAM facies Noonan syndrome", "CAM facies cardio-facio-cutaneous syndrome", "Camellar ichthyosis", "Camellar ichthyosis type 1", "Camellar ichthyosis type 2",
    "Camellar ichthyosis type 3", "Camellar ichthyosis type 4", "Camellar ichthyosis type 5", "Camellar ichthyosis autosomal dominant", "Camellar ichthyosis autosomal recessive",
    "Camellar macular degeneration", "Camellar macular hole", "Camellar macular hole", "Camellar separation", "Camellar separation of retina",
    "Cameleer foot", "Cameleer gait", "Cameleer posture", "Cameleer spine", "Cameleer walk",
    "Cameloid gait", "Cameloid posture", "Camelpox", "Camelpox virus infection", "Camera eye",
    "Camera eye anterior chamber", "Camera eye aqueous humor", "Camera eye posterior chamber", "Camera eye vitreous humor", "Cameron ulcer",
    "Cameron ulcer esophageal", "Cameron ulcer gastric", "Cameron ulcer hiatal hernia", "Camisa syndrome", "Camisa syndrome hereditary hemorrhagic telangiectasia",
    "Camisole", "Camisole restraint", "Camisole restraint complication", "Camisole restraint-induced asphyxia", "Camisole restraint-induced injury",
    "Camitz syndrome", "Camitz syndrome carpal tunnel", "Camitz syndrome median nerve", "Camitz syndrome thenar muscle atrophy", "Cammann murmur",
    "Cammann murmur patent ductus arteriosus", "Cammann murmur machinery murmur", "Cammann murmur continuous murmur", "Camp fever", "Camp fever epidemic typhus",
    "Camp fever louse-borne typhus", "Camp fever murine typhus", "Camp fever scrub typhus", "Camp fever tick-borne typhus", "Campanacci disease",
    "Campanacci syndrome", "Campanacci syndrome osteofibrous dysplasia", "Campanacci syndrome adamantinoma", "Campbell de Morgan spots", "Campbell de Morgan spots cherry angiomas",
    "Campbell de Morgan spots senile angiomas", "Campbell ligament", "Campbell ligament injury", "Campbell procedure", "Campbell procedure complication",
    "Campbell procedure hip", "Campbell procedure hip arthroplasty", "Campbell procedure hip reconstruction", "Campbell syndrome", "Campbell syndrome bronchiectasis",
    "Campbell syndrome cystic fibrosis", "Campbell syndrome immunodeficiency", "Campbell syndrome primary ciliary dyskinesia", "Camper chiasm", "Camper chiasm facial nerve",
    "Camper chiasm parotid plexus", "Camper fascia", "Camper fascia abdominal wall", "Camper fascia superficial fascia", "Camper ligament",
    "Camper ligament inguinal ligament", "Campesterolemia", "Campesterolemia phytosterolemia", "Campesterolemia sitosterolemia", "Campomelia",
    "Campomelic dysplasia", "Campomelic syndrome", "Campomelic dwarfism", "Campomelia Cumming type", "Campomelia hypoplastic scapulae",
    "Campomelia long bone bowing", "Campomelia sex reversal", "Campomelia skeletal dysplasia", "Campomelia thanatophoric dysplasia-like", "Campomelia with sex reversal",
    "Camptocormia", "Camptocormia Parkinson disease", "Camptocormia axial dystonia", "Camptocormia bent spine syndrome", "Camptocormia disproportionate antecollis",
    "Camptodactyly", "Camptodactyly arthropathy coxa vara pericarditis syndrome", "Camptodactyly C syndrome", "Camptodactyly Guadalajara type", "Camptodactyly Tel Hashomer type",
    "Camptodactyly arthropathy syndrome", "Camptodactyly camptomelia", "Camptodactyly cleft palate clubfoot", "Camptodactyly familial", "Camptodactyly joint contractures",
    "Camptodactyly muscular hypoplasia", "Camptodactyly myopia", "Camptodactyly sensorineural deafness", "Camptodactyly synostosis", "Camptodactyly syndrome",
    "Camptodactyly Toriello type", "Camptodactyly type Guadalajara", "Camptodactyly type Tel Aviv", "Camptodactyly type Tel Hashomer", "Camptomelia",
    "Camptomelic dysplasia", "Camptomelic syndrome", "Camptomelic dwarfism", "Camptomelia Cumming type", "Camptomelia long bone bowing",
    "Camptospasm", "Camptospasm camptocormia", "Camptospasm dystonia", "Camptospasmus", "Camurati-Engelmann disease",
    "Camurati-Engelmann disease progressive diaphyseal dysplasia", "Camurati-Engelmann disease ribbing type", "Camurati-Engelmann disease type 1", "Camurati-Engelmann disease type 2", "Canada-Cronkhite syndrome",
    "Canada-Cronkhite syndrome Cronkhite-Canada syndrome", "Canadian encephalitis", "Canadian encephalitis western equine encephalitis", "Canadian hemorrhagic fever", "Canadian hemorrhagic fever nephropathia epidemica",
    "Canadian leukoencephalopathy", "Canadian leukoencephalopathy progressive multifocal leukoencephalopathy", "Canadian Medical Association", "Canadian Medical Association guidelines", "Canadian Medical Association journal",
    "Canadian neurological scale", "Canadian neurological scale stroke", "Canadian neurological scale trauma", "Canadian occupational performance measure", "Canadian occupational performance measure assessment",
    "Canadian Rheumatology Association", "Canadian Rheumatology Association guidelines", "Canadian Task Force", "Canadian Task Force on Preventive Health Care", "Canadian Task Force recommendations",
    "Canal of Nuck", "Canal of Nuck cyst", "Canal of Nuck hydrocele", "Canal of Nuck hernia", "Canal of Schlemm",
    "Canal of Schlemm aqueous humor drainage", "Canal of Schlemm glaucoma", "Canalar coloboma", "Canalar coloboma optic disc", "Canalar coloboma optic nerve",
    "Canalicular adenoma", "Canalicular adenoma salivary gland", "Canalicular adenoma benign", "Canalicular laceration", "Canalicular laceration eyelid",
    "Canalicular laceration lacrimal duct", "Canalicular stenosis", "Canalicular stenosis lacrimal", "Canalicular stenosis punctal", "Canalicular trauma",
    "Canaliculitis", "Canaliculitis acute", "Canaliculitis actinomycotic", "Canaliculitis chronic", "Canaliculitis lacrimal",
    "Canaliculitis suppurative", "Canaliculodacryocystostomy", "Canaliculodacryocystostomy complication", "Canaliculodacryocystostomy failure", "Canaliculorhinostomy",
    "Canaliculorhinostomy complication", "Canaliculorhinostomy failure", "Canalis basilaris medianus", "Canalis basilaris medianus persistent", "Canalis caroticus",
    "Canalis caroticus aberrant", "Canalis centralis", "Canalis centralis spinal cord", "Canalis cervicis uteri", "Canalis cervicis uteri obstruction",
    "Canalis condylaris", "Canalis condylaris emissary vein", "Canalis facialis", "Canalis facialis dehiscence", "Canalis femoralis",
    "Canalis femoralis hernia", "Canalis hypoglossi", "Canalis infraorbitalis", "Canalis inguinalis", "Canalis inguinalis hernia",
    "Canalis mandibulae", "Canalis mandibulae nerve", "Canalis nasolacrimalis", "Canalis nasolacrimalis obstruction", "Canalis nervi petrosi superficialis minoris",
    "Canalis obturatorius", "Canalis opticus", "Canalis opticus fracture", "Canalis palatinus major", "Canalis palatinus minor",
    "Canalis palatovaginalis", "Canalis pharyngeus", "Canalis pharyngeus vidian nerve", "Canalis pterygoideus", "Canalis pterygoideus vidian nerve",
    "Canalis pterygopalatinus", "Canalis radialis", "Canalis sacralis", "Canalis sacralis cyst", "Canalis semicircularis",
    "Canalis semicircularis dehiscence", "Canalis semicircularis fistula", "Canalis spiralis cochleae", "Canalis spiralis modioli", "Canalis spiralis foraminosus",
    "Canalis stylomastoideus", "Canalis stylomastoideus facial nerve", "Canalis tarsi", "Canalis tarsi syndrome", "Canalis tarsi tarsal tunnel syndrome",
    "Canalis tympanicus", "Canalis tympanicus chorda tympani", "Canalis ulnaris", "Canalis ulnaris Guyon canal", "Canalis ulnaris syndrome Guyon canal syndrome",
    "Canalis vertebralis", "Canalis vertebralis spinal canal", "Canalis vertebralis stenosis", "Canalis vomerovaginalis", "Canalis vomerovaginalis sphenoid process",
    "Canalis vomerorostralis", "Canalis vomerorostralis vomer bone", "Canavan disease", "Canavan disease spongiform leukodystrophy", "Canavan disease aspartoacylase deficiency",
    "Canavan disease megalencephaly", "Canavan disease van Bogaert-Bertrand disease", "Canavan leukodystrophy", "Canavan spongy degeneration", "Canavan-van Bogaert-Bertrand disease",
    "Canceled impulse", "Canceled impulse conduction", "Canceled impulse heart", "Cancellous bone", "Cancellous bone graft",
    "Cancellous bone loss", "Cancellous bone marrow", "Cancellous bone osteopenia"
    
];

// Verify count
console.log(`Total symptoms in database: ${symptomsDatabase.length}`);// Maine akhir se dot (.) hata diya hai aur commas sahi kar diye hain.


let selectedSymptoms = [];
let lastAiResponse = ""; 
const BASE_URL = 'https://new-healthxra-backend.vercel.app';

const symptomInput = document.getElementById('symptomInput');
const suggestionsBox = document.getElementById('suggestions');
const tagsContainer = document.getElementById('selectedTags');
const symptomForm = document.getElementById('symptomForm');
const resultsSection = document.getElementById('results');
const aiResponseBox = document.getElementById('aiResponse');
const userStory = document.getElementById('userStory');

// --- 1. SEARCH & TAGS SYSTEM ---
if (symptomInput) {
    symptomInput.addEventListener('input', () => {
        const query = symptomInput.value.toLowerCase().trim();
        suggestionsBox.innerHTML = '';
        if (query.length > 0) {
            const matches = symptomsDatabase.filter(s => s.includes(query) && !selectedSymptoms.includes(s));
            if (matches.length > 0) {
                suggestionsBox.style.display = 'block';
                matches.forEach(match => {
                    const div = document.createElement('div');
                    div.className = 'suggestion-item';
                    div.innerHTML = `<i class="fas fa-plus-circle" style="margin-right:8px; color:#226653;"></i> ${match}`;
                    div.onclick = () => {
                        selectedSymptoms.push(match);
                        renderTags();
                        symptomInput.value = '';
                        suggestionsBox.style.display = 'none';
                    };
                    suggestionsBox.appendChild(div);
                });
            } else { suggestionsBox.style.display = 'none'; }
        } else { suggestionsBox.style.display = 'none'; }
    });
}

function renderTags() {
    tagsContainer.innerHTML = selectedSymptoms.map(s => `
        <span class="s-tag shadow-sm" style="background:#226653; color:white; padding:10px 18px; border-radius:30px; margin:6px; display:inline-flex; align-items:center; font-weight:500; text-transform:capitalize;">
            ${s} <i class="fas fa-times-circle" style="margin-left:12px; cursor:pointer; opacity:0.8;" onclick="removeItem('${s}')"></i>
        </span>
    `).join('');
}

window.removeItem = (s) => {
    selectedSymptoms = selectedSymptoms.filter(item => item !== s);
    renderTags();
};

// --- 2. DATA FILTERING & UI PARSER ---
const parseAiResponseToUI = (text) => {
    const cleanText = text.replace(/\*\*/g, '').trim();
    const isUrdu = /[\u0600-\u06FF]/.test(cleanText);
    
    // Split sections
    const sections = cleanText.split('\n');
    let htmlContent = "";

    // Header Badge
    htmlContent += `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:25px; border-bottom:2px solid #eee; padding-bottom:15px;">
            <div style="background:#226653; color:white; padding:6px 15px; border-radius:4px; font-size:12px; font-weight:bold;">CLINICAL TRIAGE REPORT</div>
            <div style="color:#666; font-size:12px;"><i class="fas fa-calendar-alt"></i> ${new Date().toLocaleDateString()}</div>
        </div>
    `;

    // Process Line by Line for Tables/Lists
    let inList = false;
    htmlContent += `<div style="direction: ${isUrdu ? 'rtl' : 'ltr'}; text-align: ${isUrdu ? 'right' : 'left'}; font-family: ${isUrdu ? 'inherit' : 'sans-serif'};">`;

    sections.forEach(line => {
        if (line.includes('%') || /^[1-5]\./.test(line)) {
            // Treat as Condition Table Row
            htmlContent += `<div style="background:#f8f9fa; padding:12px; margin-bottom:8px; border-radius:6px; border-left:4px solid #226653; display:flex; justify-content:space-between;">
                <span style="font-weight:600; color:#1e2f4a;">${line}</span>
                <i class="fas fa-check-circle" style="color:#226653;"></i>
            </div>`;
        } else if (line.startsWith('-') || line.startsWith('•')) {
            // Treat as Advice Bullets
            htmlContent += `<p style="margin:5px 0; color:#444; font-size:15px; display:flex; gap:10px;">
                <i class="fas fa-hand-holding-medical" style="color:#226653; margin-top:4px;"></i> <span>${line.substring(1)}</span>
            </p>`;
        } else if (line.length > 2) {
            // Regular Headings or Text
            const isHeading = line.toLowerCase().includes('condition') || line.toLowerCase().includes('advice') || line.toLowerCase().includes('urgency');
            htmlContent += `<h5 style="color:${isHeading ? '#226653' : '#333'}; margin-top:20px; font-weight:bold; font-size:16px;">${line}</h5>`;
        }
    });

    htmlContent += `</div>`;
    return htmlContent;
};

// --- 3. FORM SUBMISSION ---
if (symptomForm) {
    symptomForm.onsubmit = async (e) => {
        e.preventDefault();
        
        const age = document.getElementById('age').value;
        const gender = document.getElementById('gender').value;
        const description = userStory ? userStory.value.trim() : "";

        if (selectedSymptoms.length === 0 && !description) {
            alert("Please select symptoms or describe your condition."); return;
        }

        resultsSection.style.display = 'block';
        resultsSection.scrollIntoView({ behavior: 'smooth' });
        
        aiResponseBox.innerHTML = `
            <div style="text-align:center; padding:50px;">
                <div class="spinner-border" style="width: 3.5rem; height: 3.5rem; color: #226653;" role="status"></div>
                <h5 style="margin-top:25px; color:#1e2f4a; letter-spacing:1px;">GENERATING CLINICAL ASSESSMENT...</h5>
                <p style="color:#888; font-size:13px;">Our AI is analyzing ${selectedSymptoms.length} symptoms against medical databases.</p>
            </div>`;

        try {
            const response = await fetch(`${BASE_URL}/api/check-symptoms`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ age, gender, symptoms: selectedSymptoms, description })
            });

            const data = await response.json();
            lastAiResponse = data.diagnosis;

            aiResponseBox.innerHTML = `
                <div class="card shadow-lg" style="border-radius:15px; border:none; overflow:hidden;">
                    <div style="background:#1e2f4a; padding:15px; color:white; font-size:14px; display:flex; justify-content:space-between;">
                        <span><i class="fas fa-user-circle"></i> PATIENT: ${age}Y / ${gender.toUpperCase()}</span>
                        <span><i class="fas fa-shield-alt"></i> SECURE AI</span>
                    </div>
                    <div class="card-body" style="padding:30px; background:#ffffff;">
                        ${parseAiResponseToUI(lastAiResponse)}
                        
                        <div style="margin-top:40px;">
                            <button onclick="downloadPDF()" id="pdfBtn" class="btn btn-lg w-100 shadow" style="background:#226653; color:white; border-radius:10px; padding:15px; font-weight:bold; font-size:16px; transition:0.3s;">
                                <i class="fas fa-file-medical-alt" style="margin-right:10px;"></i> DOWNLOAD CLINICAL PDF REPORT
                            </button>
                            <p style="text-align:center; color:#e74c3c; font-size:11px; margin-top:15px; font-weight:500;">
                                <i class="fas fa-exclamation-triangle"></i> This report is for information only. Seek professional medical help for emergencies.
                            </p>
                        </div>
                    </div>
                </div>`;

        } catch (err) {
            aiResponseBox.innerHTML = `
                <div class="alert alert-danger" style="padding:30px; text-align:center;">
                    <i class="fas fa-unlink fa-3x" style="margin-bottom:15px;"></i>
                    <h4>Connection Failed</h4>
                    <p>Could not reach the AI Server. Please check if the Render backend is active.</p>
                    <button class="btn btn-outline-danger btn-sm" onclick="location.reload()">Retry Connection</button>
                </div>`;
        }
    };
}

// --- 4. PDF ENGINE ---
async function downloadPDF() {
    const pdfBtn = document.getElementById('pdfBtn');
    const originalContent = pdfBtn.innerHTML;
    
    pdfBtn.innerHTML = `<i class="fas fa-sync fa-spin"></i> PREPARING MEDICAL DOCUMENT...`;
    pdfBtn.disabled = true;

    try {
        const response = await fetch(`${BASE_URL}/api/generate-pdf`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                age: document.getElementById('age').value,
                gender: document.getElementById('gender').value,
                symptoms: selectedSymptoms,
                description: userStory.value,
                diagnosis: lastAiResponse
            })
        });

        if (!response.ok) throw new Error("PDF server error");

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `HealthXRay_Report_${new Date().getTime()}.pdf`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        
    } catch (err) {
        alert("System busy: Could not generate PDF. Please try again.");
    } finally {
        pdfBtn.innerHTML = originalContent;
        pdfBtn.disabled = false;
    }
}
// --- Updated Tags Rendering with Remove Logic ---
function renderTags() {
    const tagsContainer = document.getElementById('selectedTags');
    if (!tagsContainer) return;

    tagsContainer.innerHTML = selectedSymptoms.map(s => `
        <span class="s-tag shadow-sm" style="background:#226653; color:white; padding:10px 18px; border-radius:30px; margin:6px; display:inline-flex; align-items:center; font-weight:500; text-transform:capitalize; animation: fadeIn 0.3s ease;">
            ${s} 
            <i class="fas fa-times-circle" style="margin-left:12px; cursor:pointer; opacity:0.8;" onclick="window.removeItem('${s.replace(/'/g, "\\'")}')"></i>
        </span>
    `).join('');
}

// --- Global Function: Isay file mein kahin bhi rakh dein (Lekin Render se bahar) ---
window.removeItem = (s) => {
    // Array se symptom nikaalein
    selectedSymptoms = selectedSymptoms.filter(item => item !== s);
    // UI refresh karein
    renderTags();
};

import { useState } from "react";
import { Check, X, ArrowRight, RotateCcw } from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  story: string;
}

const quizQuestions: Question[] = [
  {
    id: 1,
    question: "In which year did Rabindranath Tagore become the first non-European to win the Nobel Prize in Literature?",
    options: ["1905", "1913", "1921", "1930"],
    correctAnswer: 1,
    story: "In 1913, Tagore made history by becoming the first non-European Nobel laureate in Literature for his profound collection 'Gitanjali' (Song Offerings). The Swedish Academy was moved by his 'profoundly sensitive, fresh and beautiful verse,' which he had personally translated into English. This achievement brought Indian literature to the global stage and marked a turning point in how the world viewed Eastern philosophy and poetry."
  },
  {
    id: 2,
    question: "What was the original name of Rabindranath Tagore's famous song 'Ekla Chalo Re'?",
    options: ["Walk Alone", "Jodi Tor Dak Shune Keu Na Ashe", "Amar Sonar Bangla", "Bharoto Bhagyo Bidhata"],
    correctAnswer: 1,
    story: "'Jodi Tor Dak Shune Keu Na Ashe' (If They Answer Not To Thy Call) is the opening line of this powerful anthem of self-reliance. Written in 1905, this song became Mahatma Gandhi's favorite and a rallying cry for India's independence movement. The song's message—that if no one responds to your call, you should walk alone—embodies the courage and determination that Tagore believed was essential for personal and national transformation."
  },
  {
    id: 3,
    question: "Which university did Tagore establish in 1921?",
    options: ["Calcutta University", "Visva-Bharati University", "Shantiniketan Academy", "Jorasanko Institute"],
    correctAnswer: 1,
    story: "Visva-Bharati University, meaning 'communion of the world with India,' was Tagore's dream of creating a center where the world meets in a single nest. Built on the foundation of his earlier school at Shantiniketan, this university embraced outdoor classrooms under trees, synthesized Eastern and Western learning, and welcomed students from across the globe. Today, it stands as a UNESCO World Heritage Site and continues Tagore's vision of universal education and cultural exchange."
  },
  {
    id: 4,
    question: "How many national anthems did Rabindranath Tagore compose?",
    options: ["One", "Two", "Three", "Four"],
    correctAnswer: 1,
    story: "Tagore holds the unique distinction of composing the national anthems of two countries: 'Jana Gana Mana' for India and 'Amar Sonar Bangla' for Bangladesh. Both songs capture the essence of their nations with poetic beauty and deep patriotism. Interestingly, Sri Lanka's national anthem is also inspired by a Tagore song, though not directly written by him. This remarkable achievement showcases how his music transcended borders and united people across nations."
  },
  {
    id: 5,
    question: "What was the name of Tagore's ancestral home in Kolkata?",
    options: ["Marble Palace", "Jorasanko Thakur Bari", "Belur Math", "Dakshineswar Temple"],
    correctAnswer: 1,
    story: "Jorasanko Thakur Bari, the Tagore family mansion in North Kolkata, was where Rabindranath was born and spent much of his creative life. This grand house was a cultural hub where Bengal's intellectual elite gathered for discussions, performances, and artistic collaborations. The sprawling mansion with its courtyards and galleries witnessed the birth of countless poems, songs, and plays. Today, it houses the Rabindra Bharati Museum, preserving the legacy of Bengal's Renaissance and the Nobel laureate's extraordinary life."
  },
  {
    id: 6,
    question: "What was the name of Tagore's wife whom he married in 1883?",
    options: ["Kadambari Devi", "Mrinalini Devi", "Pratibha Devi", "Sarala Devi"],
    correctAnswer: 1,
    story: "Tagore married Mrinalini Devi in 1883 when he was 22 and she was only 10 years old, following the customs of that era. Despite the arranged marriage, they developed a loving relationship and had five children together. Tragically, Mrinalini passed away in 1902 at the young age of 29, leaving Tagore devastated. Her death, along with the loss of two of their children, deeply influenced his poetry and spiritual outlook. Many of his most poignant works on love, loss, and the ephemeral nature of life were shaped by these personal tragedies."
  },
  {
    id: 7,
    question: "At what age did Tagore start writing poetry?",
    options: ["Five years old", "Eight years old", "Twelve years old", "Sixteen years old"],
    correctAnswer: 1,
    story: "Tagore's genius manifested remarkably early—he began writing poetry at the tender age of eight. His first published work appeared when he was just sixteen. Growing up in the culturally rich Tagore household, young Rabindranath was immersed in literature, music, and theater from birth. His father would take him on extended travels across India, exposing him to diverse landscapes and cultures that would later infuse his poetry with universal themes and profound sensitivity to nature and humanity."
  },
  {
    id: 8,
    question: "What unique educational philosophy did Tagore implement at Shantiniketan?",
    options: ["Rote memorization", "Open-air classrooms", "Military discipline", "Religious instruction only"],
    correctAnswer: 1,
    story: "Tagore revolutionized education by conducting classes under trees in open air, believing that children learn best when connected to nature. He rejected the rigid colonial education system that emphasized memorization and discipline. Instead, Shantiniketan (meaning 'Abode of Peace') fostered creativity, critical thinking, and harmony with the environment. Students learned through music, art, drama, and direct observation of nature. This holistic approach—integrating mind, body, and spirit—was decades ahead of its time and continues to influence progressive education worldwide."
  },
  {
    id: 9,
    question: "Which British honor did Tagore renounce in 1919?",
    options: ["Order of Merit", "Knighthood", "Victoria Cross", "Distinguished Service Order"],
    correctAnswer: 1,
    story: "In a powerful act of protest, Tagore renounced his knighthood in 1919 following the Jallianwala Bagh massacre in Amritsar, where British troops killed hundreds of peaceful protesters. In his letter to the Viceroy, he wrote that he could no longer retain a title from a government that had committed such 'monstrous' acts. This courageous stand against colonial brutality cost him prestige but earned him immense moral authority. It demonstrated that for Tagore, principles and human dignity were more valuable than any honor or recognition."
  },
  {
    id: 10,
    question: "How many songs did Tagore compose during his lifetime?",
    options: ["Around 500", "Around 1,000", "Around 2,000", "Around 2,230"],
    correctAnswer: 3,
    story: "Tagore's musical legacy is staggering—he composed approximately 2,230 songs, collectively known as 'Rabindra Sangeet.' These songs span every human emotion and philosophical theme, from devotional to romantic, from patriotic to universal. He created new ragas and musical forms, blending classical Indian music with folk traditions. Even today, Rabindra Sangeet forms a distinct genre in Bengali music, with dedicated radio stations and countless performers. His songs are not mere entertainment but vehicles for spiritual awakening and emotional catharsis, continuing to move millions."
  },
  {
    id: 11,
    question: "What was Tagore's pet name in his family?",
    options: ["Rabi", "Robi", "Rabi Babu", "None—he was called Rabindranath"],
    correctAnswer: 0,
    story: "Within the warm circle of his family, the great poet was affectionately called 'Rabi'—a simple, intimate name meaning 'sun' in Sanskrit. This pet name reveals the human side of the towering literary figure: a beloved son, brother, and later a doting father and grandfather. Despite his global fame, Tagore remained deeply connected to his family roots. The Tagore household was filled with creative energy, intellectual debates, and artistic performances, where young Rabi absorbed the cultural richness that would later blossom into his extraordinary body of work."
  },
  {
    id: 12,
    question: "Which form of art did Tagore take up seriously only in his sixties?",
    options: ["Music composition", "Painting", "Sculpture", "Dance"],
    correctAnswer: 1,
    story: "In his early sixties, Tagore discovered a new form of expression—painting. What began as doodles and corrections in his manuscripts evolved into a serious artistic pursuit. Without formal training, he created over 2,000 paintings in his final years, characterized by bold colors, imaginative forms, and dreamlike qualities. His artwork exhibited across Europe earned critical acclaim. This late-blooming artistic phase demonstrates Tagore's boundless creativity and his belief that it's never too late to explore new dimensions of self-expression. His paintings now hang in museums worldwide."
  },
  {
    id: 13,
    question: "What Sanskrit term did Tagore use to describe his educational philosophy?",
    options: ["Brahmacharya", "Tapovan", "Gurukul", "Dharma"],
    correctAnswer: 1,
    story: "'Tapovan' (forest of spiritual practice) captured Tagore's vision of education as a sacred journey in nature's embrace. Ancient India's greatest learning happened in forest hermitages where students lived with their teachers, learning through experience and contemplation rather than textbooks. Tagore sought to revive this tradition at Shantiniketan, where the natural environment became the classroom and life itself the curriculum. Students cultivated not just intellect but character, creativity, and spiritual awareness—becoming complete human beings rather than mere repositories of information."
  },
  {
    id: 14,
    question: "Which dance drama form did Tagore create by blending various Indian classical traditions?",
    options: ["Kathak", "Rabindra Nritya", "Bharatanatyam", "Manipuri"],
    correctAnswer: 1,
    story: "Tagore created 'Rabindra Nritya' (Tagore Dance) by synthesizing elements from Manipuri, Kathakali, and other classical Indian dance forms with his own innovative movements. He believed dance was essential for holistic education and wrote dance dramas that combined poetry, music, and movement to tell stories from mythology and contemporary life. His dance compositions broke rigid classical boundaries, allowing greater emotional expression and narrative freedom. This unique dance form is still performed widely in Bengal and has influenced modern Indian dance, embodying Tagore's genius for creative fusion."
  },
  {
    id: 15,
    question: "What was the title of Tagore's autobiography?",
    options: ["My Life", "Memories", "Jeevan Smriti", "Jivansmriti"],
    correctAnswer: 3,
    story: "'Jivansmriti' (My Reminiscences), published in 1912, offers intimate glimpses into Tagore's formative years and creative development. Rather than a conventional chronological account, it reads like poetry—filled with vivid sensory memories, philosophical reflections, and the awakening of artistic consciousness. He recalls childhood moments with such intensity that readers feel transported into his world: the play of light and shadow in Jorasanko's courtyards, the sound of monsoon rains, the first stirrings of poetic inspiration. This lyrical autobiography reveals how a poet's mind transforms ordinary experience into eternal art."
  },
  {
    id: 16,
    question: "Which European country did Tagore visit over 10 times?",
    options: ["France", "Germany", "England", "Italy"],
    correctAnswer: 2,
    story: "England held special significance for Tagore—he visited more than ten times between 1878 and 1930. His first visit as a teenager was for education (though he left without completing his degree), finding British academic life stifling. Later visits were triumphant—lecturing at universities, meeting literary giants like W.B. Yeats and Ezra Pound, and captivating audiences with his philosophy. Despite his complex relationship with British colonial rule, Tagore maintained friendships with many English intellectuals who admired his work. These visits facilitated the cross-cultural dialogue he cherished, introducing Eastern thought to Western minds."
  },
  {
    id: 17,
    question: "What was Tagore's response to Einstein's theory of relativity?",
    options: ["He rejected it completely", "He engaged in philosophical dialogues with Einstein", "He ignored scientific matters", "He tried to disprove it mathematically"],
    correctAnswer: 1,
    story: "In 1930, Tagore and Einstein met for extraordinary conversations exploring the intersection of science, art, and spirituality. Their dialogues addressed profound questions: Is truth independent of human consciousness? Does beauty exist objectively or subjectively? While Einstein believed in objective reality independent of observation, Tagore argued that truth and beauty exist only in relation to human consciousness. These meetings between the poet-philosopher and the physicist demonstrate Tagore's intellectual range and his ability to engage deeply with scientific thought while maintaining his humanistic worldview."
  },
  {
    id: 18,
    question: "Which festival did Tagore establish at Shantiniketan that continues today?",
    options: ["Diwali", "Holi", "Poush Mela", "Durga Puja"],
    correctAnswer: 2,
    story: "The 'Poush Mela' (Festival of Poush month) was established by Tagore's father Maharshi Debendranath and enthusiastically promoted by Rabindranath. This annual winter fair celebrates Bengal's folk culture, rural arts, handicrafts, and Baul music. Held on the grounds of Shantiniketan, it attracts thousands of visitors who enjoy traditional songs, dance performances, local crafts, and authentic Bengali culture. Tagore believed such festivals connected urban educated people with rural roots, preserving indigenous traditions threatened by modernity. The Poush Mela embodies his vision of cultural continuity and celebration of India's village heritage."
  },
  {
    id: 19,
    question: "What was the name of Tagore's monthly magazine that promoted Bengali literature?",
    options: ["Bangadarshan", "Bharati", "Sabujpatra", "Prabasi"],
    correctAnswer: 2,
    story: "'Sabujpatra' (Green Leaves), launched in 1914, became a revolutionary platform for modern Bengali literature. Tagore used this magazine to publish experimental works and nurture young writers who challenged conservative literary conventions. The magazine's name itself symbolized freshness, growth, and renewal. Through Sabujpatra, Tagore promoted literary freedom, encouraging writers to break free from imitative styles and find authentic voices rooted in Bengali soil yet open to world literature. Though it ran for only a few years, Sabujpatra profoundly influenced Bengal's literary renaissance and modernist movement."
  },
  {
    id: 20,
    question: "In which year did Rabindranath Tagore pass away?",
    options: ["1939", "1940", "1941", "1942"],
    correctAnswer: 2,
    story: "Tagore passed away on August 7, 1941, at his beloved Jorasanko home, the same place where he was born 80 years earlier. His final years witnessed the horrors of World War II and communal violence, which deeply pained this apostle of universal humanism. Yet he remained creative until the end, writing, painting, and composing. His last poem, written shortly before death, reflected on civilization's crises but affirmed faith in humanity's creative spirit. His passing left a void in world literature, but his works continue to inspire millions, reminding us that love, beauty, and universal brotherhood are humanity's highest aspirations."
  }
];

export function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showStory, setShowStory] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null) return; // Prevent changing answer
    
    setSelectedAnswer(answerIndex);
    setShowStory(true);
    
    if (answerIndex === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    // Scroll to top of page when moving to next question
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowStory(false);
    } else {
      setQuizComplete(true);
    }
  };

  const handleRestart = () => {
    // Scroll to top when restarting quiz
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowStory(false);
    setScore(0);
    setQuizComplete(false);
  };

  if (quizComplete) {
    const percentage = (score / quizQuestions.length) * 100;
    let message = "";
    let emoji = "";
    
    if (percentage >= 90) {
      message = "Outstanding! You're a true Tagore scholar!";
      emoji = "🌟";
    } else if (percentage >= 70) {
      message = "Excellent! You have deep knowledge of Tagore's legacy!";
      emoji = "🎯";
    } else if (percentage >= 50) {
      message = "Good job! You know quite a bit about Tagore!";
      emoji = "👏";
    } else {
      message = "Keep exploring! There's so much to discover about Tagore!";
      emoji = "📚";
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 text-center">
            <div className="text-6xl mb-6">{emoji}</div>
            <h1 className="text-4xl mb-4 text-gray-900">Quiz Complete!</h1>
            <div className="text-6xl mb-6 text-amber-600">
              {score}/{quizQuestions.length}
            </div>
            <p className="text-2xl mb-8 text-gray-700">{message}</p>
            <p className="text-lg text-gray-600 mb-8">
              You scored {percentage.toFixed(0)}% on your journey through Rabindranath Tagore's extraordinary life and legacy.
            </p>
            <div className="space-y-4">
              <button
                onClick={handleRestart}
                className="inline-flex items-center gap-2 px-8 py-4 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors text-lg"
              >
                <RotateCcw size={20} />
                Take Quiz Again
              </button>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/programs"
                  className="px-6 py-3 bg-white text-amber-600 border-2 border-amber-600 rounded-md hover:bg-amber-50 transition-colors"
                >
                  Explore Our Programs
                </a>
                <a
                  href="/about"
                  className="px-6 py-3 bg-white text-amber-600 border-2 border-amber-600 rounded-md hover:bg-amber-50 transition-colors"
                >
                  Learn More About Tagore
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const question = quizQuestions[currentQuestion];
  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl mb-4 text-gray-900">
            Rabindranath Tagore Quiz
          </h1>
          <p className="text-xl text-gray-700">
            Test your knowledge and discover the extraordinary life and legacy of the Nobel Laureate
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Question {currentQuestion + 1} of {quizQuestions.length}</span>
            <span>Score: {score}/{quizQuestions.length}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-amber-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl mb-8 text-gray-900 leading-relaxed">
            {question.question}
          </h2>

          {/* Answer Options */}
          <div className="space-y-4 mb-8">
            {question.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrectAnswer = index === question.correctAnswer;
              
              let buttonClasses = "w-full text-left p-4 rounded-lg border-2 transition-all ";
              
              if (selectedAnswer === null) {
                buttonClasses += "border-gray-300 hover:border-amber-500 hover:bg-amber-50";
              } else if (isSelected && isCorrect) {
                buttonClasses += "border-green-500 bg-green-50";
              } else if (isSelected && !isCorrect) {
                buttonClasses += "border-red-500 bg-red-50";
              } else if (isCorrectAnswer) {
                buttonClasses += "border-green-500 bg-green-50";
              } else {
                buttonClasses += "border-gray-300 opacity-50";
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={selectedAnswer !== null}
                  className={buttonClasses}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg">{option}</span>
                    {selectedAnswer !== null && (
                      <span>
                        {isCorrectAnswer && (
                          <Check className="text-green-600" size={24} />
                        )}
                        {isSelected && !isCorrect && (
                          <X className="text-red-600" size={24} />
                        )}
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Story Section */}
          {showStory && (
            <div className={`p-6 rounded-lg mb-6 ${isCorrect ? 'bg-green-50 border-2 border-green-200' : 'bg-blue-50 border-2 border-blue-200'}`}>
              <div className="flex items-start gap-3 mb-3">
                {isCorrect ? (
                  <Check className="text-green-600 flex-shrink-0 mt-1" size={24} />
                ) : (
                  <X className="text-red-600 flex-shrink-0 mt-1" size={24} />
                )}
                <h3 className="text-xl text-gray-900">
                  {isCorrect ? "Correct!" : "Not quite!"}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                {question.story}
              </p>
            </div>
          )}

          {/* Next Button */}
          {showStory && (
            <button
              onClick={handleNext}
              className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors text-lg"
            >
              {currentQuestion < quizQuestions.length - 1 ? (
                <>
                  Next Question
                  <ArrowRight size={20} />
                </>
              ) : (
                "See Results"
              )}
            </button>
          )}
        </div>

        {/* Info Section */}
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Discover more about Tagore's artistic legacy through our <a href="/programs" className="text-amber-600 hover:text-amber-700 underline">programs</a> and <a href="/inspiration" className="text-amber-600 hover:text-amber-700 underline">inspiration</a> pages.
          </p>
        </div>
      </div>
    </div>
  );
}
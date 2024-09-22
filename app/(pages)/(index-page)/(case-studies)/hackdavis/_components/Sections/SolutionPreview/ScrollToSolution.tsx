'use client';

export default function ScrollToSolution() {
  const handleScroll = () => {
    const finalSolutionSection = document.getElementById('1');
    if (finalSolutionSection) {
      finalSolutionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      className="bg-[#005271] text-white p-4 rounded-lg"
      onClick={handleScroll}
    >
      Jump to Solution
    </button>
  );
}

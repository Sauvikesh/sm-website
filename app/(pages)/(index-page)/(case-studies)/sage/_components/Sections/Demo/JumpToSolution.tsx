'use client';

export default function JumpToSolution() {
  const handleScroll = () => {
    const finalSolutionSection = document.getElementById('1');
    if (finalSolutionSection) {
      finalSolutionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      className="bg-[#1B454F] text-white p-4 rounded-lg"
      onClick={handleScroll}
    >
      Jump to Final Solution
    </button>
  );
}

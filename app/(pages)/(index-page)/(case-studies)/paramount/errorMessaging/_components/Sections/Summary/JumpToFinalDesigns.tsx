'use client';

// TODO: put the right ID
export default function JumpToFinalDesigns() {
  const handleScroll = () => {
    const finalDesignsection = document.getElementById('Final Designs');
    if (finalDesignsection) {
      finalDesignsection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      className="flex items-center bg-[#0064FF] text-white p-4 h-12 rounded-lg"
      onClick={handleScroll}
    >
      Jump to Final Designs
    </button>
  );
}

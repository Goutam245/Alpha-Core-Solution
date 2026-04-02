import logo from '@/assets/logo.jpg';

interface BackgroundPatternProps {
  className?: string;
}

const BackgroundPattern = ({ className = '' }: BackgroundPatternProps) => {
  return (
    <div 
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      style={{
        backgroundImage: `url(${logo})`,
        backgroundRepeat: 'repeat',
        backgroundSize: '200px 200px',
        opacity: 0.03,
        filter: 'blur(1px)',
      }}
    />
  );
};

export default BackgroundPattern;
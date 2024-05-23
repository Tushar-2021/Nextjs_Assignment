import DesignTool from './DesignTool';
import Frameworks from './Framework';
import WebFrameworks from './WebFrameworks';
import CodeSettings from './CodeSettings';
import Deploy from './Deploy';

const Section2 = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8 mt-4">
      <h1 className="text-center text-2xl font-bold mb-8">Plat UI integrates seamlessly to go from designs to code to deploy</h1>
      <div className="grid grid-cols-2 mt-4">
        <DesignTool />
        <Frameworks />
        <WebFrameworks />
        <CodeSettings />
        <Deploy />
      </div>
    </div>
  );
};

export default Section2;

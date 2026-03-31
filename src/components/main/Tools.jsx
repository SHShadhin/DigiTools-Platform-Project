import React, { use } from 'react';
import ToolsCard from './ToolsCard';

const Tools = ({ toolsPromise, carts, setCarts }) => {
  const tools = use(toolsPromise);
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-9/12 mx-auto pb-20">
        {tools.map(tool => (
          <div
            key={tool.id}
            className="card transition-all duration-300 hover:scale-102 hover:shadow-lg hover:bg-green-50 rounded-3xl bg-white border border-gray-100 shadow-sm"
          >
            <ToolsCard
              tool={tool}
              carts={carts}
              setCarts={setCarts}
            ></ToolsCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
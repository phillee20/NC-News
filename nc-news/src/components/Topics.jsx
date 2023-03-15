import { useState } from "react";

function Topics() {
  const [topics, setTopics] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h2>Please select a Topic:</h2>
      <form className="dropDownTopics" onSubmit={handleSubmit}>
        <select
          id="topicOptions"
          onChange={(event) => {
            setTopics(event.target.value);
          }}
        >
          <option>Topics</option>
          <option>Coding</option>
          <option>Cooking</option>
          <option>Football</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Topics;

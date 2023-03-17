import { useState, useEffect } from "react";
import { getTopics } from "../api";

function Topics() {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    setIsLoading(true);
    getTopics().then((response) => {
      console.log(response);
      setTopics(response);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading Articles for chosen Topic...</p>;
  }

  return (
    <main>
      <h2 id="topicLabel">Please select a Topic:</h2>
      <form className="dropDownTopics">
        <select
          id="topicOptions"
          value={selectedValue}
          onChange={(event) => setSelectedValue(event.target.value)}
        >
          <option disabled value="">
            Select Topic
          </option>
          <option value="1">Coding</option>
          <option value="2">Cooking</option>
          <option value="3">Football</option>
        </select>
      </form>
    </main>

    // {topics.map((topic) => {
    //     return
    // })}
  );
}
export default Topics;

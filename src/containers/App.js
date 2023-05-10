import React, { Component } from "react";

import EmojiList from "../components/EmojiList";
import SearchBox from "../components/SearchBox";
import BackToTop from "../components/BackToTop";
import Loading from "../components/Loading";

class App extends Component {

  constructor() {
    super()
    this.state = {
      q: "https://emoji-api.com/emojis?access_key=",
      k: "f9f175ea215853a39fc5ea7a104af4edef6170b2",
      emojis: [],
      searchField: '',
      scroll: false
    }
  }


  componentDidMount() {
    fetch(this.state.q + this.state.k)
      .then(response => response.json())
      .then(allEmojis => (

        this.setState({ emojis: allEmojis }, () => {
          console.log('Emojis fetched:', this.state.emojis);
        })));

    window.addEventListener('scroll', this.handleScroll);

  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
  }

  handleScroll = () => {
    const { scrollY } = window;
    const scroll = scrollY > 500;
    this.setState({ scroll });
  };

  render() {
    // destructuring
    const { emojis, searchField } = this.state;

    const filteredEmojis = emojis.filter(emoji => {
      const searchLower = searchField.toLowerCase();
      const slugLower = emoji.slug.toLowerCase();
      const groupLower = emoji.group.toLowerCase();
      const subGroupLower = emoji.subGroup.toLowerCase();
    
      return (
        slugLower.includes(searchLower) ||
        groupLower.includes(searchLower) ||
        subGroupLower.includes(searchLower)
      );
    });

    if (!emojis.length) {
      return <Loading />
    } else {
      return (

        <main>
          <header className="text-white py-5 px-3">
            <div className="container">
              <h1 className="text-center">All the emojis <span class="emoji">🎉🎉🎉</span></h1>
            </div>
          </header>

          <SearchBox searchChange={this.onSearchChange} />

          <EmojiList emojis={filteredEmojis} />

          <BackToTop scroll={this.state.scroll} />

        </main>)
    }
  }

}
export default App;
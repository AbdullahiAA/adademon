import React from "react";
import StorylineCardItem from "./StorylineCardItem";
import "./StorylineCards.css";

function StorylineCards() {
  return (
    <div className="storylineCards">
      <StorylineCardItem
        num="01"
        title="Starting Out"
        content={[
          "Each player is equipped with only a map by Persephone at the start of the game, and must venture out into the different zones in the underworld.",
          "Souls must gain XP in order to challenge bigger, badder foes and win. Players will find it hard to survive into lower zones if they haven’t sufficiently leveled up to meet the zone requirements.",
          "Souls who perish on their mission are automatically returned to the fields of Asphodel, and they may choose to return back to their quest.",
        ]}
      />
      <StorylineCardItem
        num="02"
        title="Player Interaction"
        content={[
          "Souls may trade items based on their rarity and level between one another on the in-game marketplace, these trades are powered by the use of smart contracts and require no centralized  figure overseeing them.",
          "Players may form guilds to pass through dangerous terrain and defeat terrible monsters such as Arganon and The Keriten.",
          "Rewards gained from defeating monsters are automatically shared between the guild members based on their level participation.",
        ]}
      />
      <StorylineCardItem
        num="03"
        title="Perilous Levels"
        content={[
          "The deeper one ventures, the rarer the items they come across, and the more dangerous it becomes.",
          "Traverse the five mighty rivers of the Underworld in search of magical items to become stronger and secure your passage into the world of the living. From the Elysian Fields to the Fields of Mourning, down to the fiery depths of Tartarus, ADA Demon has countless stages and adventures, each with infinite possibility perpetuated by free will.",
          "Explore the vast and ever-developing geography of the underworld and unlock hidden wonders and treasures.",
        ]}
      />
      <StorylineCardItem
        num="04"
        title="Foes and Allies"
        content={[
          "Seek the audience of gods and monsters, battle your way through evil multi-snaked Gorgons, one-eyed Cyclopes, deformed harpies, and even the mighty Hydra.",
          "Challenge the massive three-headed Cerberus, or tame them to do your bidding with a Unique Item.",
          "Outsmart the murderous Minotaur, and harvest his magical hide.",
          "Get help from various primary and minor deities, including the three judges of the underworld – Minos, Rhadamanthus, and Aeacus.",
        ]}
      />
      <StorylineCardItem
        num="05"
        title="Custom-made Weapons"
        content={[
          "In ADA Demon, weapons can be crafted in any fashion to attain unique features to accomplish various tasks.",
          "Weapons created can also be sold as NFTs within the in-game marketplace.",
          "Players unwilling to start over from the beginning may attain a quick boost by purchasing high-level items directly from the marketplace in order to scale quickly through the game.",
          "Some monsters cannot be defeated without the use of specially created weapons such as the Scythe of Talos, The Discarded Sword of Thor and The Dragon Scale Bow.",
        ]}
      />
      <StorylineCardItem
        num="06"
        title="Magical and Customized Lands"
        content={[
          "Underworld lovers often fantasize about gaining mystical possessions of their choice in the actual world; this can be done within the ADA demon world by completing tasks given to them by gods.",
          "They may learn more about NFTs by earning or winning incentives as they play the game. Thanks to these benefits, it is also possible for them to rent out lands within this magical metaverse, which pertains to real estate, thanks to these benefits.",
        ]}
      />
    </div>
  );
}

export default StorylineCards;

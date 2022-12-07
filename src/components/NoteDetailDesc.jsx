import React, { useState } from "react";
import { View, Text } from "react-native";

import { Title } from "./SubInfo";
import { COLORS, SIZES, FONTS } from "../constants";
import TimeNow from "./TimeNow";


const NoteDetailDesc = ({ data }) => {
  
  const [description, setDescription] = useState(data.description.slice(0, 100));
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Title
          title={data.title}
          titleSize={SIZES.extraLarge}
        />

      </View>

      <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
      <TimeNow titleSize={SIZES.large} date={data.date} />

        <Text
          style={{
            marginTop: SIZES.base,
            fontSize: SIZES.large,
            fontFamily: FONTS.semiBold,
            color: COLORS.primary,
          }}
        >
          Description
        </Text>
        <View
          style={{
            marginTop: SIZES.base,
          }}
        >
          <Text
            style={{
              color: COLORS.secondary,
              fontSize: SIZES.large,
              fontFamily: FONTS.regular,
              lineHeight: SIZES.large,
            }}
          >
            {description}
            {!readMore && "..."}
            <Text
              style={{
                color: COLORS.primary,
                fontSize: SIZES.small,
                fontFamily: FONTS.semiBold,
              }}
              onPress={() => {
                if (!readMore) {
                  setDescription(data.description);
                  setReadMore(true);
                } else {
                  setDescription(data.description.slice(0,100));
                  setReadMore(false);
                }
              }}
            >
              {readMore ? " Show Less" : " Read More"}
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
};

export default NoteDetailDesc;

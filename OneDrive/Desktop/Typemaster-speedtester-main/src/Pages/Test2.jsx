import React, { useEffect, useRef, useState } from "react";
import { Text, Button, Box, useDisclosure, Heading, Image } from "@chakra-ui/react";
import { SlSpeedometer } from "react-icons/sl";
import { GiArcheryTarget } from "react-icons/gi";
import { VscDebugRestart, VscDebugStart } from "react-icons/vsc";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
import pc from "./pc.svg";

// ✅ Hindi text for typing test
const texts = () =>
  `भारत एक विविधताओं से भरा देश है। यहाँ अनेक भाषाएँ, धर्म, और संस्कृतियाँ मिलती हैं। 
  शिक्षा और तकनीक के क्षेत्र में भारत ने बहुत प्रगति की है। 
  हमें अपने देश पर गर्व होना चाहिए और इसे और आगे बढ़ाना चाहिए।`
    .split(" ")
    .sort(() => (Math.random() > 0.5 ? 1 : -1));

function Word({ text, active, correct }) {
  if (correct === true) {
    return <span style={{ color: "green", fontWeight: 900 }}>{text} </span>;
  }
  if (correct === false) {
    return <span style={{ color: "red", fontWeight: 900 }}>{text} </span>;
  }
  if (active) {
    return <span style={{ fontWeight: "bold", textDecoration: "underline" }}>{text} </span>;
  }
  return <span>{text} </span>;
}
Word = React.memo(Word);

function Timer({ correctWords, startCounting }) {
  const [timeElapsed, setTimeElapsed] = useState(0);

  useEffect(() => {
    let id;
    if (startCounting) {
      id = setInterval(() => {
        setTimeElapsed((old) => old + 1);
      }, 1000);
    }
    return () => clearInterval(id);
  }, [startCounting]);

  const minutes = timeElapsed / 60;
  return (
    <>
      <Text pt="5px" fontSize={28} color="white" display={"flex"}>
        <SlSpeedometer /> गति (Speed)
      </Text>
      <Text fontFamily="mono" fontWeight="800" fontSize={28} m="8px" color="facebook.200">
        {Math.floor(correctWords / minutes || 0)} WPM
      </Text>

      <Text pt="5px" fontSize={28} color="white" display={"flex"}>
        <GiArcheryTarget /> समय (Time)
      </Text>
      <Text fontFamily="mono" fontWeight="800" fontSize={28} m="8px" color="facebook.200">
        {timeElapsed} सेकंड
      </Text>
    </>
  );
}

export const TestSpeedHindi = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [input, setInput] = useState("");
  const randomText = useRef(texts());
  const [activeWord, setActiveWord] = useState(0);
  const [correctWords, setCorrectWords] = useState([]);
  const [startCount, setStartCounting] = useState(false);

  function startType(value) {
    if (activeWord === randomText.current.length) return;

    if (!startCount) setStartCounting(true);

    if (value.endsWith(" ")) {
      if (activeWord === randomText.current.length - 1) {
        setStartCounting(false);
        setInput("पूर्ण हुआ ✅");
      } else {
        setInput("");
      }

      setActiveWord((index) => index + 1);
      setCorrectWords((prev) => {
        const word = value.trim();
        const newResult = [...prev];
        newResult[activeWord] = word === randomText.current[activeWord];
        return newResult;
      });
    } else {
      setInput(value);
    }
  }

  return (
    <Box w="100%" h={"80vh"} bg="#577b87">
      {/* For mobile: show warning */}
      <Box w="70%" display={{ base: "grid", lg: "none" }} m="auto">
        <Heading color={"white"}>
          हिंदी टाइपिंग टेस्ट के लिए कृपया लैपटॉप या कंप्यूटर का उपयोग करें।
        </Heading>
        <Image src={pc} alt="pc" />
      </Box>
      
      <div style={{ margin: "", color: "#0b0445ff" }}>
        <strong>नोट:</strong> हिंदी में टाइप करने के लिए अपने सिस्टम में हिंदी कीबोर्ड सक्षम करें या{" "}
        <a
          href="https://www.google.com/inputtools/try/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Input Tools
        </a>{" "}
        का उपयोग करें।
      </div>

      {/* For desktop: main test */}
      <Box w="70%" display={{ base: "none", lg: "flex" }} m="auto" h="auto" p="5rem 0" gap={12}>
        <Box bg="white" h="48vh" borderRadius={10} w="80%" m="auto">
          <Text p={5} fontSize="25px" color="black">
            {randomText.current.map((word, index) => (
              <Word text={word} active={index === activeWord} correct={correctWords[index]} />
            ))}
          </Text>

        <textarea
        id="hindi-typing-input"
        lang="hi"
        placeholder="यहाँ हिंदी में टाइप करें..."
        value={input}
        onChange={e => setInput(e.target.value)}
        style={{
          width: "100%",
          minHeight: "120px",
          fontSize: "1.2em",
          marginTop: 8,
          marginBottom: 16,
          padding: 8,
          borderRadius: 4,
          border: "1px solid #ccc",
        }}
      />
        </Box>

        <Box>
          <Timer startCounting={startCount} correctWords={correctWords.filter(Boolean).length} />

          <Button mt="2rem" bg="none" color="#ffe318" fontSize={25} _hover={{ bg: "none" }} onClick={onOpen}>
            <VscDebugRestart /> पुनः शुरू करें
          </Button>

          <AlertDialog isOpen={isOpen} onClose={onClose} isCentered size={{ base: "xs", lg: "2xl" }}>
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                  <Text bg="beige" w="150px" h="150px" borderRadius="50%" m="auto" p={{ base: "10%", lg: "5%" }}>
                    <VscDebugStart fontSize={90} fill="green" />
                  </Text>
                </AlertDialogHeader>
                <AlertDialogBody m="auto" fontSize={{ base: 15, lg: 23 }} fontWeight="600">
                  टाइपिंग शुरू करने से पहले तैयार हो जाइए...
                </AlertDialogBody>
                <AlertDialogFooter m="1rem auto">
                  <Button colorScheme="whatsapp" p="2rem 2.5rem" fontSize={{ base: 18, lg: 30 }} onClick={() => window.location.reload()}>
                    दोबारा टाइपिंग शुरू करें
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </Box>
      </Box>
    </Box>
  );
};

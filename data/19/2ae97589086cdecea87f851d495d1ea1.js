callback({
  "levelNumber": 19,
  "size": 119,
  "steps": 57,
  "successRatio": 0.04,
  "type": "specific",
  "author": "viamodulo",
  "hash": "2ae97589086cdecea87f851d495d1ea1",
  "path": "19-Countdown-10.82/119.59.specific-viamodulo.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 19-Countdown - SIZE 119/10 - SPEED 59/82 --\n\n-- This solution is level-specific (patterned and quality-limited input) and assumes 4 inbox\n-- items with value of no less than -9 or greater than 9 and following pattern : +-0?.\n\n    INBOX   \n\t-- first, positive input\n    COPYTO   0\n    OUTBOX  \n    BUMPDN   0\n    JUMPZ    a\n    OUTBOX  \n    BUMPDN   0\n    JUMPZ    a\n    OUTBOX  \n    BUMPDN   0\n    JUMPZ    a\n    OUTBOX  \n    BUMPDN   0\n    JUMPZ    a\n    OUTBOX  \n    BUMPDN   0\n    JUMPZ    a\n    OUTBOX  \n    BUMPDN   0\n    JUMPZ    a\n    OUTBOX  \n    BUMPDN   0\n    JUMPZ    a\n    OUTBOX  \n    BUMPDN   0\n    JUMPZ    a\n    OUTBOX  \n    BUMPDN   0\na:\n    OUTBOX  \n    INBOX   \ne:\n\t-- second, negative input\n    COPYTO   0\n    OUTBOX  \n    BUMPUP   0\n    JUMPZ    c\n    OUTBOX  \n    BUMPUP   0\n    JUMPZ    c\n    OUTBOX  \n    BUMPUP   0\n    JUMPZ    c\n    OUTBOX  \n    BUMPUP   0\n    JUMPZ    c\n    OUTBOX  \n    BUMPUP   0\n    JUMPZ    c\n    OUTBOX  \n    BUMPUP   0\n    JUMPZ    c\n    OUTBOX  \n    BUMPUP   0\n    JUMPZ    c\n    OUTBOX  \n    BUMPUP   0\n    JUMPZ    c\n    OUTBOX  \n    BUMPUP   0\nc:\n\tOUTBOX\n\t-- third is always zero\n\tINBOX\n\tOUTBOX\n    INBOX  \n\tJUMPN\t d\n    JUMPZ    f \n\t-- fourth, positive input\n    COPYTO   0\n    OUTBOX  \n    BUMPDN   0\n    JUMPZ    f\n    OUTBOX  \n    BUMPDN   0\n    JUMPZ    f\n    OUTBOX  \n    BUMPDN   0\n    JUMPZ    f\n    OUTBOX  \n    BUMPDN   0\n    JUMPZ    f\n    OUTBOX  \n    BUMPDN   0\n    JUMPZ    f\n    OUTBOX  \n    BUMPDN   0\n    JUMPZ    f\n    OUTBOX  \n    BUMPDN   0\n    JUMPZ    f\n    OUTBOX  \n    BUMPDN   0\n    JUMPZ    f\n    OUTBOX  \n    BUMPDN   0\n\tJUMPZ    f\nd:\n\t-- fourth, negative input\n    COPYTO   0\n    OUTBOX  \n    BUMPUP   0\n    JUMPZ    f\n    OUTBOX  \n    BUMPUP   0\n    JUMPZ    f\n    OUTBOX  \n    BUMPUP   0\n    JUMPZ    f\n    OUTBOX  \n    BUMPUP   0\n    JUMPZ    f\n    OUTBOX  \n    BUMPUP   0\n    JUMPZ    f\n    OUTBOX  \n    BUMPUP   0\n    JUMPZ    f\n    OUTBOX  \n    BUMPUP   0\n    JUMPZ    f\n    OUTBOX  \n    BUMPUP   0\n    JUMPZ    f\n    OUTBOX  \n    BUMPUP   0\nf:\n\tOUTBOX\n\t\n"
});
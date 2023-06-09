# Overview

This project comes from the Alchemy University - Blockchain Developer bootcamp. It has to be done at the end of the week 2.

# Gift List

The project this week is to build an application which gives out gifts, but only to names on the list. The catch is that on the server you are only allowed to store one 32 byte value in the server memory. This 32 byte value has to be enough for the server to be able to determine who is on the list.

Think of the client as the prover here. They are the ones trying to prove to the server that the one name is in the list. Likewise think of the server as the verifier here. They are taking the client's proof and, using minimal information, able to verify that the name sent from the client is actually in the list.

# Description

Here, the server stores the merkle tree root which has been generated using the script `utils/generateRoot.js` as an hardcoded value.
The client gets an username, generates a merkle proof from the full merkle tree and the username, and sends the proof and the username to the server.
With an username and a merkle proof, the server is able to verify that these data matches with its hardcoded merkle tree root.

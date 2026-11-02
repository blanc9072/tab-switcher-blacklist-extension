# Eisenhower Matrix

<table>
  <tr>
    <th></th>
    <th>Urgent</th>
    <th>Not Urgent</th>
  </tr>
  <tr>
    <th>Important</th>
    <td valign="top">
      <strong>MVP</strong>
      <ul>
        <li><strong>Focus session toggle:</strong> start and stop a session from the toolbar popup</li>
        <li><strong>Editable blacklist:</strong> add and remove sites in the popup, starting with YouTube, Instagram, and Reddit</li>
        <li><strong>Switch detection:</strong> during a session, check the active tab on every tab change, window change, and navigation</li>
        <li><strong>Site matching:</strong> match the tab's hostname against the blacklist
        <li><strong>Warning overlay:</strong> cover the distracting page with a warning offering "Back to work" and "Continue anyway"</li>
      </ul>
    </td>
    <td valign="top">
      <strong>Schedule</strong>
      <ul>
        <li><strong>Timed sessions:</strong> set a length, such as 25 minutes, with a countdown, and automatic end</li>
        <li><strong>Page exceptions:</strong> allow specific pages on a blacklisted site, such as a lecture playlist on YouTube</li>
        <li><strong>Focus stats:</strong> show warnings per day and how often you went back to work</li>
        <li><strong>Strict mode:</strong> block the page outright, with no "continue anyway" button</li>
        <li><strong>Session goal:</strong> show the task you said you'd work on in the warning</li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Not Important</th>
    <td valign="top">
      <strong>Delegate</strong>
      <ul>
        <li><strong>Cleaning up typed sites</strong> (<code>https://www.bbc.co.uk/news</code> to <code>bbc.co.uk</code>): tldts</li>
        <li><strong>Popup styling:</strong> Pico.css</li>
        <li><strong>Toolbar and popup icons:</strong> Lucide</li>
        <li><strong>Running unit tests:</strong> Vitest</li>
      </ul>
    </td>
    <td valign="top">
      <strong>Delete</strong>
      <ul>
        <li><strong>AI that judges whether a page is distracting:</strong> a blacklist does the job without analyzing your browsing</li>
        <li><strong>User accounts and a cloud backend:</strong> all of the data fits in local browser storage</li>
        <li><strong>Firefox and Safari versions:</strong> I'll only be makign the Chrome extension</li>
      </ul>
    </td>
  </tr>
</table>
